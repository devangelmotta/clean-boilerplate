// import { take, call, put, select } from 'redux-saga/effects';

import { call, put, takeLatest } from 'redux-saga/effects';
import { loginAlive, loginExpire } from "./actions";
import ActionTypes from "./constants";
import request from 'utils/request';
import Cookies from 'universal-cookie';
import { endpoints } from 'utils/API/endpoints';

/**
 * Login request/response handler
 */

export function* checkLogin() {
  console.log("Entry in saga")
  const cookies = new Cookies();
  var tkAcess = cookies.get("omni-tk-access");
  var tkId = cookies.get("omni-tk-id");

  console.log("tokenAccess", tkAcess);
  console.log("tokenId", tkId);

  const requestURL = endpoints.verify_credentials;
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
      yield put(loginAlive(true));
    }
    else {
      yield put(loginExpire(false));
    }

  } catch (err) {
    yield put(loginExpire(false));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* loginCheck() {

  yield takeLatest(ActionTypes.LOAD_LOGIN, checkLogin);
}