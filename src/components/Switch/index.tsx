import React from 'react';

import { SwitchProps } from './types';
import { StyledTrack } from './styled';
import Tab from '../Tab';

const Switch: React.FC<SwitchProps> = ({ options, checked, clickHandler, size = 'l', variant = 'default' }) => {
  const [label1, label2] = options;

  return (
    <StyledTrack size={size} variant={variant}>
      <input type="checkbox" onClick={clickHandler} checked={checked} hidden readOnly />

      <Tab size={size} checked={checked} variant={variant} style={{ border: 'none' }}>
        {label1}
      </Tab>
      <Tab size={size} checked={!checked} variant={variant} style={{ border: 'none' }}>
        {label2}
      </Tab>
    </StyledTrack>
  );
};

export default Switch;
