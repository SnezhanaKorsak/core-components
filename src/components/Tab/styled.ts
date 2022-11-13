import styled, { css } from 'styled-components';

import { theme } from '../../theme';
import { TabProps } from './types';

export const StyledTab = styled.div<Omit<TabProps, 'label'> & { checked: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  min-width: ${({ size }) => (size == 'l' ? 125 : 94)}px;
  min-height: ${({ size }) => (size == 'l' ? 46 : 38)}px;
  padding: ${({ size }) => (size == 'l' ? `11px 35px` : `7px 20px`)};
  border-radius: ${({ size }) =>
    size == 'l' ? `${theme.borderRadius[4]}` : `${theme.borderRadius[2]}`}px;
  background-color: ${({ checked }) =>
    checked ? `${theme.colors.primary}` : `${theme.colors.tertiary}`};
  font-family: ${theme.fonts[0]};
  font-weight: ${({ checked }) =>
    checked ? `${theme.sizes.fontWeight[3]}` : `${theme.sizes.fontWeight[2]}`};
  font-size: ${theme.sizes.fontSizes[1]}px;
  color: ${({ checked }) => (checked ? `${theme.colors.white}` : `${theme.colors.black}`)};
  letter-spacing: -0.01em;
  cursor: pointer;

  ${({ variant, checked }) =>
    variant === 'alt' &&
    css`
      min-width: 41px;
      min-height: 32px;
      padding: 4px 10px;
      border-radius: ${theme.borderRadius[0]}px;
      background-color: ${checked ? `${theme.colors.primary}` : `${theme.colors.white}`};
      color: ${checked ? `${theme.colors.white}` : `${theme.colors.primary}`};
      font-weight: ${theme.sizes.fontWeight[3]};
      border: ${!checked && `1px solid ${theme.colors.primary}`};
    `}
`;
