/*
 *
 * LoginValidate actions
 *
 */

import { action } from 'typesafe-actions';
import { } from './types';

import ActionTypes from './constants';

export const loginLoad = () => action(ActionTypes.LOGGIN_LOAD);
export const loginOn = (status: any) => action(ActionTypes.LOGGIN_ON, { status });
export const loginOff = (status: any) => action(ActionTypes.LOGGIN_OFF, { status });
