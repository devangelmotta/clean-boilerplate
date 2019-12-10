/**
 *
 * th component
 *
 */
import React from 'react';
import styled from 'styled-components';

interface Props {
    border?: string;
}

export const Th = styled.th`
border: ${(props: Props) => props.border || "none"}; 
  }
`;