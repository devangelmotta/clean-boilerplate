/*
 *
 * App reducer
 *
 */

import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
  loginOff: true,
  loginOn: false,
};

function appReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  switch (action.type) {
    case ActionTypes.LOAD_LOGIN:
      return {
        loginOff: true,
        loginOn: false
      };
    case ActionTypes.LOGIN_ALIVE:
      return {
        loginOff: false,
        loginOn: action.payload.status
      };
    case ActionTypes.LOGIN_EXPIRE:
      return {
        loginOff: action.payload.status,
        loginOn: false
      };
    default:
      return state;
  }
}

export default appReducer;
