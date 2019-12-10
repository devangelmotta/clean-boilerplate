/*
 *
 * LoginValidate reducer
 *
 */

import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
  loginOn: false,
  loginOff: true,
};

function loginValidateReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  switch (action.type) {
    case ActionTypes.LOGGIN_LOAD:
      return {
        loginOn: false,
        loginOff: false
      };
    case ActionTypes.LOGGIN_ON:
      return {
        loginOn: action.payload.status,
        loginOff: false
      };
    case ActionTypes.LOGGIN_OFF:
      return {
        loginOn: false,
        loginOff: action.payload.status
      };
    default:
      return state;
  }
}

export default loginValidateReducer;
