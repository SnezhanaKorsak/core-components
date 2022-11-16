import React from 'react';

import { TagProps } from './types';
import { StyledTag } from './styled';
import { LeftAddons, RightAddons } from '../../common/styled';

const Tag: React.FC<TagProps> = ({
  label,
  checked = false,
  leftAddons,
  rightAddons,
  setChecked,
  disabled = false,
  ref,
  ...restProps
}) => {
  const handleClick = () => setChecked && setChecked(!checked);

  return (
    <StyledTag checked={checked} disabled={disabled} onClick={handleClick} {...restProps}>
      {leftAddons && <LeftAddons>{leftAddons}</LeftAddons>}
      {label}
      {rightAddons && <RightAddons>{rightAddons}</RightAddons>}
    </StyledTag>
  );
};

export default Tag;
