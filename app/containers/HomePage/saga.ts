/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { sucessDetails, errorDetails } from "./actions";
import ActionTypes from "./constants";
import request from 'utils/request';
import Cookies from 'universal-cookie';
import { endpoints } from "../../utils/API/endpoints";


/**
 * Login request/response handler
 */
export function* getDetails() {

  const cookies = new Cookies();
  var tkAcess = cookies.get("omni-tk-access");
  var tkId = cookies.get("omni-tk-id");

  console.log("tokenAccess", tkAcess);
  console.log("tokenId", tkId);

  const requestURL = endpoints.get_details;
  var options = {
    method: 'POST',
    // body: JSON.stringify({ valueFilter:  }),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + tkAcess,
      'Idtoken': tkId
    }
  }
  try {

    const data = yield call(request, requestURL, options);
    yield put(sucessDetails(data));
  } catch (err) {
    yield put(errorDetails(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* detailsData() {

  yield takeLatest(ActionTypes.LOAD_DETAILS, getDetails);
}
