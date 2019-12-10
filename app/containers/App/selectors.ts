import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the app state domain
 */

const selectAppDomain = (state: ApplicationRootState) => {
  return state.app || initialState;
};

/**
 * Other specific selectors
 */

/**
 * Default selector used by App
 */

const makeSelectApp = () =>
  createSelector(
    selectAppDomain,
    substate => {
      return substate;
    },
  );

export default makeSelectApp;
export { selectAppDomain };
