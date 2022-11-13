import React from 'react';

import PrimaryInput from './PrimaryInput';
import TertiaryInput from './TertiaryInput';

import { InputProps } from './types';
import SecondaryInput from './SecondaryInput';

const Input: React.FC<InputProps> = ({ view = 'primary', ...restProps }) => {
  return (
    <>
      {view === 'primary' && <PrimaryInput {...restProps} />}
      {view === 'secondary' && <SecondaryInput {...restProps} />}
      {view === 'tertiary' && <TertiaryInput {...restProps} />}
    </>
  );
};

export default Input;
