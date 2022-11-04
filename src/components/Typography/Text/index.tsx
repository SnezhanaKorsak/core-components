import React, { ReactNode } from 'react';

import { StyledText } from './styled';
import { TextProps } from './types';

const Text: React.FC<TextProps & { children: ReactNode }> = ({ level, weight = 'regular', children }) => {
  return (
    <StyledText level={level} weight={weight}>
      {children}
    </StyledText>
  );
};

export default Text;
