import React from 'react';

import { TabProps } from './types';
import { StyledTab } from './styled';
import { LeftAddons, RightAddons } from '../../common/styled';

const Tab: React.FC<TabProps> = ({
  label,
  checked = true,
  variant = 'default',
  leftAddons,
  rightAddons,
  setChecked,
  ref,
  ...restProps
}) => {
  const handleClick = () => setChecked && setChecked(!checked);

  return (
    <StyledTab variant={variant} checked={checked} onClick={handleClick} {...restProps}>
      {leftAddons && <LeftAddons>{leftAddons}</LeftAddons>}
      {label}
      {rightAddons && <RightAddons>{rightAddons}</RightAddons>}
    </StyledTab>
  );
};

export default Tab;
