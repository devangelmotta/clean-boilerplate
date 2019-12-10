import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';

/* --- STATE --- */
interface LoginValidateState {
  readonly loginOn: any;
  readonly loginOff: any;
}

/* --- ACTIONS --- */
type LoginValidateActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type RootState = ApplicationRootState;
type ContainerState = LoginValidateState;
type ContainerActions = LoginValidateActions;

export { RootState, ContainerState, ContainerActions };
