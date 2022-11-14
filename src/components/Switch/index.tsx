import React from 'react';

import { SwitchProps } from './types';
import { StyledTrack } from './styled';
import Tab from '../Tab';

const Switch: React.FC<SwitchProps> = ({
  options,
  checked,
  clickHandler,
  size = 'l',
  variant = 'default',
}) => {
  const [label1, label2] = options;

  return (
    <StyledTrack size={size} variant={variant}>
      <input type="checkbox" onClick={clickHandler} checked={checked} hidden readOnly />

      <Tab label={label1} size={size} checked={checked} variant={variant} />

      <Tab label={label2} size={size} checked={!checked} variant={variant} />
    </StyledTrack>
  );
};

export default Switch;
