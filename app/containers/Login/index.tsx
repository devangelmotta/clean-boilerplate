/*
 *
 * Login
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { loadLogin } from "./actions";
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLogin from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Row } from "../../components/Row";
import { Column } from "../../components/Column"
import Avatar from "./sections/avatar";
import LogoGoCloud from "./sections/logo";
import ShapeSMS from "./sections/shapeSms";
import FormLogin from "./sections/formLogin";
import FormGroup from "../../components/FormGroup";
import { Redirect } from 'react-router';

const stateSelector = createStructuredSelector({
  login: makeSelectLogin(),
});

interface Props { }
interface State {
  loadingLogin?: any,
  errorLogin?: any,
  sucessLogin?: any
}

function Login(props: Props) {

  useInjectReducer({ key: 'login', reducer: reducer });
  useInjectSaga({ key: 'login', saga: saga });

  var { login } = useSelector(stateSelector);
  const dispatch = useDispatch();
  console.log(login);
  return (
    <div style={{
      width: window.innerWidth + 2,
      height: window.innerHeight + 2,

    }}>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Login in OMNI Platform" />
      </Helmet>
      {login.sucessLogin && <Redirect exact to="/" />}
      <Row width="100%">
        <Column alignItems="flex-start" width="35%">
          <LogoGoCloud />
          <Avatar />
          <FormGroup>
            <FormLogin dispatch={dispatch} loadLogin={loadLogin} />
          </FormGroup>
        </Column>
        <ShapeSMS />

      </Row>
    </div>
  );
}

export default Login;
