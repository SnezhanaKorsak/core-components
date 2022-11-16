import React, { ReactNode } from 'react';
import { TitleProps } from './types';
import { StyledTitle } from './styled';

const Title: React.FC<TitleProps & { children: ReactNode }> = ({
  children,
  level,
  weight = 'bold',
  ...restProps
}) => {
  return (
    <StyledTitle level={level} weight={weight} {...restProps}>
      {children}
    </StyledTitle>
  );
};

export default Title;
