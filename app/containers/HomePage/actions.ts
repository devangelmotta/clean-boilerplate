import { action } from 'typesafe-actions';
// import { } from './types';

import ActionTypes from './constants';

export const loadDetails = () => action(ActionTypes.LOAD_DETAILS);
export const sucessDetails = (data: object) => action(ActionTypes.SUCESS_DETAILS, { data });
export const errorDetails = (data: object) => action(ActionTypes.ERROR_DETAILS, { data });

