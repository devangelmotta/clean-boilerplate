/**
 *
 * Table component
 *
 */
import React from 'react';
import styled from 'styled-components';


interface Props {
  display?: string;
  border?: string;
  backgroundColor?: string;
  height?: string;
  width?: string;
  borderRadius?: string;
  padding?: string;
}

export const Table = styled.table`
    display: ${(props: Props) => props.display || "flex"};
    flex-direction: column;
    background-color: ${props => props.backgroundColor || "transparent"};
    height: ${props => props.height || "null"};
    width: ${props => props.width || "100%"};
    border-radius: ${props => props.borderRadius || "0"};
    border: ${(props: Props) => props.border || "none"}; 
    padding: ${props => props.padding || "0 0 0 0"};
  }
`;
