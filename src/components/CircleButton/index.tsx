import React from 'react';

import { CircleButtonProps } from './types';
import { StyledButton, InternalBorder } from './styled';

const CircleButton: React.FC<CircleButtonProps> = ({ label, ref, ...restProps }) => {
  return (
    <StyledButton {...restProps}>
      <InternalBorder view={restProps.view || 'primary'}>{label}</InternalBorder>
    </StyledButton>
  );
};

export default CircleButton;
