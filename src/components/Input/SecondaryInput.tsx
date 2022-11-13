import React from 'react';
import { InputProps } from './types';
import { RowContainer, StyledInputSecondary } from './styled';

const SecondaryInput: React.FC<InputProps> = ({
  ref,
  label,
  buttonAddons,
  disabled = false,
  error = false,
  ...props
}) => {
  return (
    <RowContainer disabled={disabled} error={error}>
      <StyledInputSecondary placeholder={label} {...props} />
      {buttonAddons}
    </RowContainer>
  );
};

export default SecondaryInput;
