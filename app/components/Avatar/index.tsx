/**
 *
 * Avatar
 *
 */

import React from 'react';
import styled from 'styled-components';

interface Props {
  color?: string;
  height?: string;
  width?: string;
  padding?: string;
  backgroundColor?: string;
}

export const Avatar = styled.img`
  height: ${(props: Props) => props.height || "10rem"};
  width: ${props => props.width || "8rem"};

  }
`;
