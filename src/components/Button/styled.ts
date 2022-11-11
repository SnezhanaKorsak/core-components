import styled, { css } from 'styled-components';

import { theme } from '../../theme';
import { ButtonProps } from './types';

export const StyledButton = styled.button<Omit<ButtonProps, 'children' | 'ref'>>`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: transparent;
  border: none;
  border-radius: ${theme.borderRadius[0]}px;
  cursor: pointer;
  outline: none;
  font-family: ${theme.fonts[0]};
  font-size: ${theme.sizes.fontSizes[1]}px;
  font-weight: ${theme.sizes.fontWeight[3]};
  line-height: ${theme.sizes.fontSizes[6]}px;
  color: ${theme.colors.black};

  ${({ view }) =>
    view === 'primary' &&
    css`
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};

      &:disabled {
        background-color: ${theme.colors.grey};
      }
    `}

  ${({ view }) =>
    view === 'outlined' &&
    css`
      border: 1px solid ${theme.colors.primary};
      color: ${theme.colors.primary};

      &:disabled {
        border: 1px solid ${theme.colors.grey};
      }
    `}

  ${({ view }) =>
    view === 'link' &&
    css`
      &:hover {
        color: ${theme.colors.primary};
      }

      &:disabled {
        border: 1px solid ${theme.colors.grey};
      }
    `}
  
  ${({ size }) =>
    size == 's' &&
    css`
      min-width: 137px;
      min-height: 44px;
      padding: 0 8px;
    `}
  ${({ size }) =>
    size == 'm' &&
    css`
      min-width: 168px;
      min-height: 44px;
      padding: 0 12px;
    `}
  ${({ size }) =>
    size == 'l' &&
    css`
      min-width: 190px;
      min-height: 54px;
      padding: 0 16px;
      font-size: ${theme.sizes.fontSizes[2]}px;
      font-weight: ${theme.sizes.fontWeight[4]};
    `}
  ${({ size }) =>
    size == 'xs' &&
    css`
      min-width: 84px;
      min-height: 54px;
      padding: 15px 30px;
    `}
  
  ${({ block }) =>
    block &&
    css`
      width: 100%;
    `}
  
  &:hover {
    box-shadow: ${({ view }) => (view === 'link' ? 'none' : theme.shadows.buttonShadows)};
  }

  &:disabled {
    color: ${({ view }) => (view === 'primary' ? theme.colors.white : theme.colors.grey)};
    box-shadow: none;
    cursor: not-allowed;
  }
`;

export const Item = styled.span`
  display: flex;
  margin: 0 5px;
`;
