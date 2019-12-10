import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';

/* --- STATE --- */
interface LoginState {
  readonly loadingLogin: boolean;
  readonly errorLogin?: object | boolean;
  readonly sucessLogin?: object | boolean;
}

/* --- ACTIONS --- */
type LoginActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type RootState = ApplicationRootState;
type ContainerState = LoginState;
type ContainerActions = LoginActions;

export { RootState, ContainerState, ContainerActions };
