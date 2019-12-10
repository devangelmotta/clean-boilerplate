import loginReducer from '../reducer';
// import { someAction } from '../actions';
import { ContainerState } from '../types';

describe('loginReducer', () => {
  let state: ContainerState;
  beforeEach(() => {
    state = {
      default: null,
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(loginReducer(undefined, {} as any)).toEqual(expectedResult);
  });


});
