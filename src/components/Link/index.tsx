import React from 'react';

import { LinkProps } from './types';
import { StyledLink } from './styled';
import { LeftAddons, RightAddons } from '../../common/styled';

const Link: React.FC<LinkProps> = ({
  label,
  href,
  isActive = false,
  disabled = false,
  block = false,
  leftAddons,
  rightAddons,
}) => {
  return (
    <StyledLink href={href} isActive={isActive} block={block} disabled={disabled}>
      {leftAddons && <LeftAddons>{leftAddons}</LeftAddons>}
      {label}
      {rightAddons && <RightAddons>{rightAddons}</RightAddons>}
    </StyledLink>
  );
};

export default Link;
