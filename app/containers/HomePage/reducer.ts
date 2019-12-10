import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
  loadDetails: false,
  sucessDetails: false,
  errorDetails: false,
};

function homeReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  switch (action.type) {
    case ActionTypes.LOAD_DETAILS:
      return {
        loadDetails: true,
        sucessDetails: false,
        errorDetails: false
      };
    case ActionTypes.SUCESS_DETAILS:
      return {
        loadDetails: false,
        sucessDetails: action.payload.data,
        errorDetails: false
      };
    case ActionTypes.SUCESS_DETAILS:
      return {
        loadDetails: false,
        sucessDetails: false,
        errorDetails: action.payload.data
      };

    default:
      return state;
  }
}

export default homeReducer;
