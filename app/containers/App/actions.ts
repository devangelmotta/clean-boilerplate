/*
 *
 * App actions
 *
 */

import { action } from 'typesafe-actions';
import { } from './types';

import ActionTypes from './constants';

export const loadLogin = () => action(ActionTypes.LOAD_LOGIN);
export const loginAlive = (status: any) => action(ActionTypes.LOGIN_ALIVE, { status });
export const loginExpire = (status: any) => action(ActionTypes.LOGIN_EXPIRE, { status });

