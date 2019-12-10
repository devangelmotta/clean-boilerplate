/**
 *
 * thead component
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
}

export const Thead = styled.thead`
    display: ${(props: Props) => props.display || "flex"};
    border: ${props => props.border || "none"}; 
    background-color: ${props => props.backgroundColor || "transparent"};
    height: ${props => props.height || "null"};
    width: ${props => props.width || "100%"};
    align-content: center;
    align-items: center;
    border-radius: ${props => props.borderRadius || "0"};
    
  }
`;