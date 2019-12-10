import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the loginValidate state domain
 */

const selectLoginValidateDomain = (state: ApplicationRootState) => {
  return state.loginValidate || initialState;
};

/**
 * Other specific selectors
 */

/**
 * Default selector used by LoginValidate
 */

const makeSelectLoginValidate = () =>
  createSelector(
    selectLoginValidateDomain,
    substate => {
      return substate;
    },
  );

export default makeSelectLoginValidate;
export { selectLoginValidateDomain };
