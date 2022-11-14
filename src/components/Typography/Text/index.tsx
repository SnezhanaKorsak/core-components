import React, { ReactNode } from 'react';

import { StyledText } from './styled';
import { TextProps } from './types';

const Text: React.FC<TextProps & { children: ReactNode }> = ({
  children,
  level = 2,
  weight = 'regular',
  ref,
  ...restProps
}) => {
  return (
    <StyledText level={level} weight={weight} {...restProps}>
      {children}
    </StyledText>
  );
};

export default Text;
