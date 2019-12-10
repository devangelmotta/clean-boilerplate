import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import ActionTypes from "./constants";
import { sucessLogin, errorLogin } from './actions';
import Cookies from 'universal-cookie';
import request from 'utils/request';
import { endpoints } from "../../utils/API/endpoints"

interface dataPayload {
  email?: string;
  password?: string;
}
interface data {
  data: dataPayload
}

interface Props {
  payload: data;
}

export function* loginIntent(props: Props) {
  const cookies = new Cookies();
  var requestURL = endpoints.auth;
  const { email, password } = props.payload.data;

  var options = {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {

    const data = yield call(request, requestURL, options);
    var tokenAccess = data.data.signInUserSession.accessToken.jwtToken;
    var tokenId = data.data.signInUserSession.idToken.jwtToken;
    console.log("Loggued")
    console.log("tokenAccess: ", tokenAccess)
    console.log("tokenId: ", tokenId)

    cookies.set("omni-tk-access", tokenAccess, { path: '/' });
    cookies.set("omni-tk-id", tokenId, { path: '/' });

    yield put(sucessLogin(data.data));
  } catch (err) {
    yield put(errorLogin(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* loginTrigger() {

  yield takeLatest(ActionTypes.LOAD_LOGIN, loginIntent);
}