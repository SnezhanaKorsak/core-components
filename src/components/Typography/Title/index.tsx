import React, { ReactNode } from 'react';
import { TitleProps } from './types';
import { StyledTitle } from './styled';

const Title: React.FC<TitleProps & { children: ReactNode }> = ({ level, weight = 'bold', children }) => {
  return (
    <StyledTitle level={level} weight={weight}>
      {children}
    </StyledTitle>
  );
};

export default Title;
