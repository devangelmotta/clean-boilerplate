/**
 *
 * FormComponents
 *
 */
import React, { useState } from 'react';
import { validators } from "../../utils/InputValidations";
export const ContextComponent = React.createContext({});

function a() {
  console.log("a")
}

var currentValues = {}
export const FormProvider = props => {

  const [valuesInput, handleChangeValues] = useState();
  const [message, handleSetMessageError] = useState("aaaaa");

  const handleChange = (evt: any, ) => {
    currentValues[evt.target.name] = evt.target.value
    handleChangeValues(currentValues)
  }

  const handleBlur = () => {
    console.log("Dispatch on blur");
    // validators[evt.target.name].validate(evt.target.value)
    //   .catch(err => console.log(err.errors[0]))
  }

  return (
    <ContextComponent.Provider value={{ handleChange, handleBlur, valuesInput, message }} >
      {props.children}
    </ ContextComponent.Provider>

  );
}

export default FormProvider;
