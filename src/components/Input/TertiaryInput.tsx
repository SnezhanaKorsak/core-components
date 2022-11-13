import React from 'react';
import { InputProps } from './types';
import { StyledInputTertiary } from './styled';

const TertiaryInput: React.FC<InputProps> = ({
  ref,
  label,
  disabled = false,
  error = false,
  ...props
}) => {
  return (
    <>
      <StyledInputTertiary placeholder={label} {...props} />
    </>
  );
};

export default TertiaryInput;
