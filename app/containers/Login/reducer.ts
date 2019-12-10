/*
 *
 * Login reducer
 *
 */

import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
  loadingLogin: false,
  errorLogin: false,
  sucessLogin: false
};

function loginReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  switch (action.type) {
    case ActionTypes.LOAD_LOGIN:
      return {
        loadingLogin: true,
        errorLogin: false,
        sucessLogin: false
      };
    case ActionTypes.SUCESS_LOGIN:
      return {
        loadingLogin: false,
        sucessLogin: action.payload.data,
        errorLogin: false
      };
    case ActionTypes.SUCESS_LOGIN:
      return {
        loadingLogin: false,
        sucessLogin: false,
        errorLogin: action.payload.data
      };
    default:
      return state;
  }
}

export default loginReducer;
