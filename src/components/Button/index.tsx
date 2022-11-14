import React from 'react';

import { ButtonProps } from './types';
import { StyledButton } from './styled';
import { LeftAddons, RightAddons } from '../../common/styled';

const Button: React.FC<ButtonProps> = ({ label, leftAddons, rightAddons, ref, ...restProps }) => {
  return (
    <StyledButton {...restProps}>
      {leftAddons && <LeftAddons>{leftAddons}</LeftAddons>}
      {label}
      {rightAddons && <RightAddons>{rightAddons}</RightAddons>}
    </StyledButton>
  );
};

export default Button;
