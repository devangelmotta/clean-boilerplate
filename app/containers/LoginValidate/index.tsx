/*
 *
 * LoginValidate
 *
 */

import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { browserHistory } from 'react-router'
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { loginLoad } from "./actions";
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLoginValidate from './selectors';
import reducer from './reducer';
import saga from './saga';

const stateSelector = createStructuredSelector({
  loginValidate: makeSelectLoginValidate(),
});


interface Props { }

function LoginValidate(props: any) {

  useInjectReducer({ key: 'loginValidate', reducer: reducer });
  useInjectSaga({ key: 'loginValidate', saga: saga });

  const { loginValidate } = useSelector(stateSelector);
  const dispatch = useDispatch();

  useEffect(() => {

  }, []);
  var childrens = { ...props.children }
  let Home = childrens[0];
  let Login = childrens[1];
  let NoFound = childrens[2];

  return (
    <Switch>
      <Route exact path='/confirm' render={() => { return loginValidate.loginOn ? childrens[0] : childrens[1] }} />
      childrens[2]
    </Switch>
  )

}

export default LoginValidate;
