/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { loadDetails } from './actions';
import { makeSelectDetails } from './selectors';
import reducer from './reducer';
import saga from './saga';
import Loading from "../../components/LoadingIndicator";

import Navbar from "./sections/navbar";
import { Column } from "../../components/Column";
import { Row } from "../../components/Row";
import ConsumeBar from "./sections/ConsumedInformationBar";
import ItemsHeader from "./sections/ItemsConsumedHeader";
import TableData from "./sections/ListDataTable";
const key = 'home';

const stateSelector = createStructuredSelector({
  details: makeSelectDetails(),
});

export default function HomePage() {

  useInjectReducer({ key: key, reducer: reducer });
  useInjectSaga({ key: key, saga: saga });

  const dispatch = useDispatch();
  var { details } = useSelector(stateSelector);
  var { sucessDetails, errorDetails } = details

  useEffect(() => {
    dispatch(loadDetails())
  }, []);

  return (
    <Column backgroundColor="#f4effd">
      <Navbar />
      <Column padding="2rem 0 0 0" backgroundColor="#fff">
        <ConsumeBar />
        <ItemsHeader />
        <TableData data={sucessDetails} />
      </Column>
    </Column>


  );
}
