import styled from 'styled-components';

import { theme } from '../../theme';
import { CircleButtonProps } from './types';

export const StyledButton = styled.button<Omit<CircleButtonProps, 'label' | 'ref'>>`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: ${({ size }) => (size === 'large' ? 120 : 90)}px;
  height: ${({ size }) => (size === 'large' ? 120 : 90)}px;
  background-color: ${({ view }) =>
    view === 'primary' ? `${theme.colors.primary}` : 'transparent'};
  border: ${({ view }) => (view === 'primary' ? 'none' : `1px solid ${theme.colors.primary}`)};
  border-radius: 50%;
  padding: ${({ size }) => (size === 'large' ? 8 : 6)}px;
  font-family: ${theme.fonts[0]};
  font-size: ${({ size }) =>
    size === 'large' ? `${theme.sizes.fontSizes[1]}` : `${theme.sizes.fontSizes[0]}`}px;
  font-weight: ${theme.fontWeight.semibold};
  line-height: ${theme.sizes.fontSizes[6]}px;
  color: ${({ view }) =>
    view === 'primary' ? `${theme.colors.white}` : `${theme.colors.primary}`};
  cursor: pointer;
  outline: none;

  &:disabled {
    background-color: ${({ view }) =>
      view === 'primary' ? `${theme.colors.grey}` : 'transparent'};
    color: ${({ view }) => view === 'outlined' && `${theme.colors.grey}`};
    cursor: not-allowed;
    border-color: ${({ view }) => view === 'outlined' && `${theme.colors.grey}`};
  }
`;

export const InternalBorder = styled.div<{ view: 'primary' | 'outlined' }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid;
  border-color: inherit;
`;
