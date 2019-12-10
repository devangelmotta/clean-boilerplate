/*
 *
 * App
 *
 */
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styles/styled-components';
import { Redirect, Switch, Route } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Footer from 'components/Footer';

import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectApp from './selectors';
import reducer from './reducer';
import saga from './saga';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

const stateSelector = createStructuredSelector({
  app: makeSelectApp(),
});

interface Props { }

function App(props: Props) {

  useInjectReducer({ key: 'app', reducer: reducer });
  useInjectSaga({ key: 'app', saga: saga });

  const { app } = useSelector(stateSelector);
  const dispatch = useDispatch();

  useEffect(() => {

  }, []);

  return <AppWrapper>
    <Helmet
      titleTemplate="%s - OMNI 1.0"
      defaultTitle="OMNI Demo Test"
    >
      <meta name="description" content="OMNI Demo Test" />
    </Helmet>
    <Switch>
      <Route path="" component={NotFoundPage} />
    </Switch>
    <Footer />
    <GlobalStyle />
  </AppWrapper>;
}

export default App;







