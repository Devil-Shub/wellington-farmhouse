import { BehaviorSubject } from "rxjs";

import { requestOptions } from "../_helpers/request-options";
import { handleResponse } from "../_helpers/handle-response";

import { environment } from "../config/test.env";

const currentUserSubject = new BehaviorSubject(
  JSON.parse(localStorage.getItem("currentUser"))
);

export const managerService = {
  add,
  edit,
  Delete,
  apiUrl: environment.apiUrl,
  currentUrl: '',
  currentUser: currentUserSubject.asObservable(),
  get currentUserValue() {
    return currentUserSubject.value;
  }
};

function add(data) {

  return fetch(
    this.apiUrl+`admin/create-manager`,
    requestOptions.post(data)
  )
    .then(handleResponse)
    .then(user => {
      // store user details and passport token in local storage to keep user logged in between page refreshes

      return user;
    });
}

function edit(data) {

  return fetch(
    this.apiUrl+`admin/update-manager`,
    requestOptions.post(data)
  )
    .then(handleResponse)
    .then(user => {
      // store user details and passport token in local storage to keep user logged in between page refreshes

      return user;
    });
}
function Delete(data) {

  return fetch(
    this.apiUrl+`admin/delete-manager`,
    requestOptions.post(data)
  )
    .then(handleResponse)
    .then(user => {
      // store user details and passport token in local storage to keep user logged in between page refreshes

      return user;
    });
}

