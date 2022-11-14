import React, { ReactNode } from 'react';
import { TitleProps } from './types';
import { StyledTitle } from './styled';

const Title: React.FC<TitleProps & { children: ReactNode }> = ({
  level,
  weight = 'bold',
  color,
  children,
}) => {
  return (
    <StyledTitle level={level} weight={weight} color={color}>
      {children}
    </StyledTitle>
  );
};

export default Title;
