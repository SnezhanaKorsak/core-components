import React from 'react';

import { LinkProps } from './types';
import { StyledLink } from './styled';
import { Content } from '../../common/styled';

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
      {leftAddons}
      {label && <Content>{label}</Content>}
      {rightAddons}
    </StyledLink>
  );
};

export default Link;
