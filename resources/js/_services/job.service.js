import { BehaviorSubject } from "rxjs";

import { requestOptions } from "../_helpers/request-options";
import { handleResponse } from "../_helpers/handle-response";

import { environment } from "../config/test.env";

const currentUserSubject = new BehaviorSubject(
  JSON.parse(localStorage.getItem("currentUser"))
);

export const jobService = {
  add,
  edit,
  Delete,
  getService,
  apiUrl: environment.apiUrl,
  currentUrl: '',
  currentUser: currentUserSubject.asObservable(),
  get currentUserValue() {
    return currentUserSubject.value;
  }
};

function add(data) {

  return fetch(
    this.apiUrl+`admin/create-service`,
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
    this.apiUrl+`admin/update-service/`+data.user_id,
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
    this.apiUrl+`admin/delete-service/`+data,
    requestOptions.get()
  )
    .then(handleResponse)
    .then(user => {
      // store user details and passport token in local storage to keep user logged in between page refreshes

      return user;
    });
}

function getService(data) {
  return fetch(
    this.apiUrl+`admin/get-service/`+data,
    requestOptions.get()
  )
    .then(handleResponse)
    .then(user => {
      // store user details and passport token in local storage to keep user logged in between page refreshes

      return user;
    });
}

