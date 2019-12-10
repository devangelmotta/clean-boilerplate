/**
 *
 * Column
 * 
 * Column and Row components are essentially the same, only their flex-direction property is different. It is separated into components for clarity purposes.
 *
 */
import React from 'react';
import styled from 'styled-components';

interface Props {
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignContent?: string;
  alignItems?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  borderWidth?: string;
  borderRadius?: string;
  borderColor?: string;
  padding?: string;
}

export const Column = styled.div`
  display: ${(props: Props) => props.display || "flex"};
  flex-direction: ${props => props.flexDirection || "column"};
  justify-content: ${props => props.justifyContent || "space-between"};
  align-content: ${props => props.alignContent || "center"}; 
  align-items: ${props => props.alignItems || "center"};
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "null"};
  background-color: ${props => props.backgroundColor || "transparent"};
  border-width: ${props => props.borderWidth || "0"};
  border-radius: ${props => props.borderRadius || "0"};
  border-color: ${props => props.borderColor || "transparent"};
  padding: ${props => props.padding || "0 0 0 0"};
`;
