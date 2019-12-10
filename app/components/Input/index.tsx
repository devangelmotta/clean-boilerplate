/**
 *
 * Input styled component with customizable props styles
 *
 */

import React from 'react';
import styled from 'styled-components';

interface Props {
  display?: string;
  width?: string;
  height?: string;
  padding?: string;
  border?: string;
  borderRadius?: string;
  borderWidth?: string;
  borderColor?: string;
  backgroundColor?: string;
  marginBottom?: string;
  boxSizing?: string;
  outline?: string;
  fontSize?: string;
  fontFamily?: string;
  fontWeight?: number;
  focusBorderColor?: string;
  inputColor?: string;
}


export const Input = styled.input`
  width: ${(props: Props) => props.width || "100%"};
  height: ${props => props.height || "40px"};
  padding: ${props => props.padding || "10px 20px"};
  border: ${props => props.border || "1px solid #999"};
  border-radius: ${props => props.borderRadius || "0px"};
  border-width: ${props => props.borderWidth || "2px"};
  border-color: ${props => props.borderColor || "#c2c4c6"};
  background-color: ${props => props.backgroundColor || "#e8f0fd"};
  box-sizing: ${props => props.boxSizing || "border-box"};
  outline: ${props => props.outline || "none"};
  color: ${props => props.inputColor || "#000"}; 
  font-size: ${props => props.fontSize || "18px"}; 
  font-family: ${props => props.fontFamily || "sans-serif"}; 
  font-weight: ${props => props.fontWeight || 400};
  &:focus{
    border-color: ${props => props.focusBorderColor || "#36bec1"};
    transition: all 0.3s ease-out;
  }
`;

