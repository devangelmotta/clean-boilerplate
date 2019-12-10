import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';

/* --- STATE --- */

interface HomeState {
  readonly loadDetails: any,
  readonly sucessDetails: any,
  readonly errorDetails: any,
}

/* --- ACTIONS --- */
type AppActions = ActionType<typeof actions>;


/* --- EXPORTS --- */

type RootState = ApplicationRootState;
type ContainerState = HomeState;
type ContainerActions = AppActions;

export { RootState, ContainerState, ContainerActions };
