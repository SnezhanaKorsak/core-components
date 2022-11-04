import React from 'react';

import { CircleButtonProps } from './types';
import { StyledButton, InternalBorder } from './styled';

const CircleButton: React.FC<CircleButtonProps> = ({ children, ref, ...restProps }) => {
  return (
    <StyledButton {...restProps}>
      <InternalBorder view={restProps.view || 'primary'}>{children}</InternalBorder>
    </StyledButton>
  );
};

export default CircleButton;
