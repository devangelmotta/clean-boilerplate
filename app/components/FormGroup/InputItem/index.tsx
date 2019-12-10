/**
 *
 * InputItem
 *
 */
import React, { useContext } from 'react';

// import styled from 'styles/styled-components';

import { FormattedMessage } from 'react-intl';
import { ContextComponent } from "../../FormGroup"
import messages from './messages';
import { Column } from "../../Column";
import { Input } from "../../Input";
import { Text } from "../../Text";

interface Props {
  value?: string;
  name?: string;
  type?: string;
  htmlFor?: string;
  handleChange?: any;
  handleBlur(): any;
  valuesInput?: object;
  message?: string;
}
const Test = (evt) => {

}
function InputItem(props: Props, ) {

  function CallOnBlur(evt: object) {
    console.log("Called");
  }

  return (
    <Column height="null" width="null">
      <Input type={props.type} name={props.name} onChange={props.handleChange} onBlur={CallOnBlur} {...props} />
      <Text color="red" fontSize="1rem">{props.message}</Text>
    </Column>
  );
}

export default InputItem;
