import React from 'react';

import { LinkProps } from './types';
import { StyledLink } from './styled';
import { StyledLeftAddons, StyledRightAddons } from '../../common/styled';

const Link: React.FC<LinkProps> = ({
  children,
  href,
  isActive = false,
  disabled = false,
  block = false,
  leftAddons,
  rightAddons,
}) => {
  return (
    <StyledLink href={href} isActive={isActive} block={block} disabled={disabled}>
      {leftAddons && <StyledLeftAddons>{leftAddons}</StyledLeftAddons>}
      {children}
      {rightAddons && <StyledRightAddons>{rightAddons}</StyledRightAddons>}
    </StyledLink>
  );
};

export default Link;
