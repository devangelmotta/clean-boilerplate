/*
 *
 * Login actions
 *
 */

import { action } from 'typesafe-actions';

import ActionTypes from './constants';

export const loadLogin = (data: object) => action(ActionTypes.LOAD_LOGIN, { data: data });
export const sucessLogin = (data: object) => action(ActionTypes.SUCESS_LOGIN, { data: data });
export const errorLogin = (data: object) => action(ActionTypes.ERROR_LOGIN, { error: data });
