import styled, { css } from 'styled-components';

import { theme } from '../../theme';

export const StyledLink = styled.a<{ block?: boolean; disabled?: boolean; isActive?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${({ block }) => block && 'space-between'};
  text-decoration: none;
  color: ${({ disabled }) => (disabled ? theme.colors.grey : theme.colors.primary)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  ${({ isActive, disabled }) =>
    isActive &&
    css`
      border-bottom: 2px solid;
      border-color: ${disabled && 'transparent'};
    `}
  &:hover {
    color: ${({ disabled }) => !disabled && theme.colors.secondary};
  }
`;
