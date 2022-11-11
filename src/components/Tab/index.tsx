import React from 'react';

import { TabProps } from './types';
import { StyledLeftAddons, StyledRightAddons, StyledTab } from './styled';

const Tab: React.FC<TabProps> = ({
  children,
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
      {leftAddons && <StyledLeftAddons>{leftAddons}</StyledLeftAddons>}
      {children}
      {rightAddons && <StyledRightAddons>{rightAddons}</StyledRightAddons>}
    </StyledTab>
  );
};

export default Tab;
