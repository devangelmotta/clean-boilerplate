// import { take, call, put, select } from 'redux-saga/effects';

import { call, put, takeLatest } from 'redux-saga/effects';
import { loginOn, loginOff } from "./actions";
import ActionTypes from "./constants";
import request from 'utils/request';
import Cookies from 'universal-cookie';

/**
 * Login request/response handler
 */

export function* checkLogin() {

  const cookies = new Cookies();
  var tkAcess = cookies.get("omni-tk-access");
  var tkId = cookies.get("omni-tk-id");

  console.log("tokenAccess", tkAcess);
  console.log("tokenId", tkId);

  const requestURL = "http://localhost:3010/v1/auth/verify-tokens";
  var options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + tkAcess,
      'Idtoken': tkId
    }
  }
  try {

    const data = yield call(request, requestURL, options);
    if (data.access) {
      yield put(loginOn(true));
    }
    // else {
    //   yield put(loginOff(false));
    // }

  } catch (err) {
    yield put(loginOff(false));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* loginCheck() {

  yield takeLatest(ActionTypes.LOGGIN_LOAD, checkLogin);
}