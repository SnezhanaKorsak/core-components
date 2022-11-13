import styled, { css } from 'styled-components';

import { theme } from '../../theme';
import { InputProps } from './types';

const fontStyles = css`
  font-family: ${theme.fonts[1]};
  font-size: ${theme.sizes.fontSizes[1]}px;
  line-height: ${theme.sizes.fontSizes[6]}px;
  font-weight: ${theme.sizes.fontWeight[3]};
  color: ${theme.colors.black};
  letter-spacing: 0.015em;
`;

const placeholderStyles = css`
  &::-webkit-input-placeholder {
    font-weight: ${theme.sizes.fontWeight[1]};
  }

  &:-moz-placeholder {
    font-weight: ${theme.sizes.fontWeight[1]};
  }

  &::-moz-placeholder {
    font-weight: ${theme.sizes.fontWeight[1]};
  }

  &::placeholder {
    font-weight: ${theme.sizes.fontWeight[1]};
  }
`;

export const ColumnContainer = styled.div<{ disabled?: boolean; error?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 59px;
  color: ${({ disabled }) => (disabled ? theme.colors.disabled : theme.colors.grey)};

  ${({ error }) =>
    error &&
    css`
      color: ${theme.colors.error};
    `}
`;

export const RowContainer = styled.div<{ disabled?: boolean; error?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 54px;
  background-color: ${theme.colors.helperBlue3};
  border-radius: ${theme.borderRadius[0]}px;

  &:hover {
    background-color: ${({ error }) => !error && theme.colors.lightGrey};
  }

  &:focus {
    background-color: ${({ error }) => !error && theme.colors.lightGrey};
  }

  ${({ error }) =>
    error &&
    css`
      background-color: ${theme.colors.errorBackground};
      color: ${theme.colors.error};
    `}

  ${({ disabled, error }) =>
    disabled &&
    !error &&
    css`
      background-color: ${theme.colors.lightGrey};
      color: ${theme.colors.disabled};
    `}
`;

export const Hint = styled.div`
  height: 24px;
  font-family: ${theme.fonts[1]};
  font-weight: ${theme.sizes.fontWeight[3]};
  font-size: ${theme.sizes.fontSizes[0]}px;
  line-height: ${theme.sizes.fontSizes[6]}px;
  color: inherit;
  letter-spacing: 0.015em;
`;

export const StyledInputPrimary = styled.input<InputProps>`
  box-sizing: border-box;
  width: 100%;
  height: 35px;
  padding: 5.5px 0;
  border: none;
  outline: none;
  border-bottom: 1px solid ${theme.colors.grey};
  background-color: transparent;
  color: inherit;

  ${fontStyles}
  ${placeholderStyles}
  &:hover {
    border-color: ${({ disabled, error }) => !disabled && !error && theme.colors.primary};
  }

  &:focus {
    border-color: ${({ disabled, error }) => !disabled && !error && theme.colors.primary};
  }

  ${({ error }) =>
    error &&
    css`
      border-color: ${theme.colors.error};
    `}

  ${({ disabled, error }) =>
    disabled &&
    !error &&
    css`
      border-color: ${theme.colors.disabled};
      cursor: not-allowed;
    `}
`;

export const StyledInputSecondary = styled.input<InputProps>`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 15px 0 15px 25px;
  border: none;
  outline: none;
  background-color: inherit;
  border-radius: inherit;

  ${fontStyles}
  ${placeholderStyles}
  
  &:disabled {
    cursor: not-allowed;
  }
`;

export const StyledInputTertiary = styled(StyledInputSecondary)`
  height: 54px;
  border: 1px solid ${theme.colors.grey};
  border-radius: ${theme.borderRadius[0]}px;
  background-color: transparent;

  &:hover {
    border-color: ${({ disabled, error }) => !disabled && !error && theme.colors.primary};
  }

  &:focus {
    border-color: ${({ disabled, error }) => !disabled && !error && theme.colors.primary};
  }

  ${({ error }) =>
    error &&
    css`
      border-color: ${theme.colors.error};
      color: ${theme.colors.error};
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      border-color: ${theme.colors.disabled};
      color: ${theme.colors.disabled};
      cursor: not-allowed;
    `}
`;
