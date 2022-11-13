import React from 'react';
import { InputProps } from './types';
import { ColumnContainer, Hint, StyledInputPrimary } from './styled';

const PrimaryInput: React.FC<InputProps> = ({
  ref,
  label,
  disabled = false,
  error = false,
  ...props
}) => {
  return (
    <ColumnContainer disabled={disabled} error={error}>
      <Hint>{label}</Hint>
      <StyledInputPrimary {...props} />
    </ColumnContainer>
  );
};

export default PrimaryInput;
