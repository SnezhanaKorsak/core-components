import React from 'react';

import { ButtonProps } from './types';
import { StyledButton } from './styled';
import { Content } from '../../common/styled';

const Button: React.FC<ButtonProps> = ({ label, leftAddons, rightAddons, ref, ...restProps }) => {
  return (
    <StyledButton {...restProps}>
      {leftAddons}
      {label && <Content>{label}</Content>}
      {rightAddons}
    </StyledButton>
  );
};

export default Button;
