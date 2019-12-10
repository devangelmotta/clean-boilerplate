/**
 *
 * Text
 *
 */
import React from 'react';
import styled from 'styled-components';


interface Props {

  fontSize?: string;
  color?: string;
  fontFamily?: string;
  fontWeight?: number;
  textAlign?: string;
  maxLines?: number;
  padding?: string;
}

export const Text = styled.p`
  display: flex;
  color: ${(props: Props) => props.color || "#000"}; 
  font-size: ${props => props.fontSize || "1vw"}; 
  font-family: ${props => props.fontFamily || "sans-serif"}; 
  font-weight: ${props => props.fontWeight || 100};
  text-align: ${props => props.textAlign || "center"};
  max-lines: ${props => props.maxLines || "none"};
  padding: ${props => props.padding || "0 0 0 0"};
  margin: 0 0 0 0;
  }
`;

