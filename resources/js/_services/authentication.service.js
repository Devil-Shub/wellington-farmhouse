import { BehaviorSubject } from "rxjs";

import { requestOptions } from "../_helpers/request-options";
import { handleResponse } from "../_helpers/handle-response";

const currentUserSubject = new BehaviorSubject(
  JSON.parse(localStorage.getItem("currentUser"))
);

export const authenticationService = {
  login,
  logout,
  currentUser: currentUserSubject.asObservable(),
  get currentUserValue() {
    return currentUserSubject.value;
  }
};

function login(email, password) {
  return fetch(
    `http://klk.leagueofclicks.com/api/auth/login`,
    requestOptions.post({ email, password })
  )
    .then(handleResponse)
    .then(user => {
      // store user details and passport token in local storage to keep user logged in between page refreshes
          console.log(user);
      localStorage.setItem("currentUser", JSON.stringify(user));
      currentUserSubject.next(user);

      return user;
    });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("currentUser");
  currentUserSubject.next(null);
}
