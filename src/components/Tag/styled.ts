import styled from 'styled-components';

import { theme } from '../../theme';
import { TagProps } from './types';

export const StyledTag = styled.div<Omit<TagProps, 'label'>>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 61px;
  min-height: 30px;
  padding: 3px 9px;
  border: 1px solid ${theme.colors.background};
  border-radius: ${theme.borderRadius[0]}px;
  outline: none;
  background-color: ${({ checked, disabled }) =>
    checked && !disabled ? theme.colors.primary : 'transparent'};
  font-family: ${theme.fonts[0]};
  font-weight: ${theme.fontWeight.extrabold};
  font-size: ${theme.sizes.fontSizes[1]}px;
  line-height: ${theme.sizes.fontSizes[6]}px;
  color: ${({ checked, disabled }) =>
    checked && !disabled ? theme.colors.white : theme.colors.primary};
  letter-spacing: -0.015em;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${({ disabled }) => !disabled && theme.colors.primary};
    color: ${({ disabled }) => !disabled && theme.colors.white};
  }
`;
