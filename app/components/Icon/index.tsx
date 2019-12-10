/**
 *
 * Icon
 *
 */
import React from 'react';
import styled from 'styled-components';


interface Props {
  color?: string;
  height?: string;
  width?: string;
  padding?: string
  backgroundColor?: string;


}

export const Icon = styled.img`
  color: ${(props: Props) => props.color || "#fff"}; 
  height: ${props => props.height || "4rem"};
  width: ${props => props.width || "4rem"};
  padding: ${props => props.padding || "0 0 0 0"};
  }
`;