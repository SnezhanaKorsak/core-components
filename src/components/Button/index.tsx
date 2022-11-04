import React from 'react';

import { ButtonProps } from './types';
import { Item, StyledButton } from './styled';

const Button: React.FC<ButtonProps> = ({ children, ref, ...restProps }) => {
  const countChildren = React.Children.count(children);

  const justifyContent = countChildren > 1 && !restProps.block ? 'space-between' : 'center';

  return (
    <StyledButton style={{ justifyContent }} {...restProps}>
      {React.Children.map(children, (child) => {
        return <Item key={child?.toString()}>{child}</Item>;
      })}
    </StyledButton>
  );
};

export default Button;
