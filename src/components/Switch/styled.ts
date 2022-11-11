import styled, { css } from 'styled-components';

import { theme } from '../../theme';

export const StyledTrack = styled.label<{ size?: 'm' | 'l'; variant?: 'alt' | 'default' }>`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0;

  ${({ variant, size }) =>
    variant === 'default'
      ? css`
          min-width: ${size == 'l' ? 250 : 188}px;
          min-height: ${size == 'l' ? 46 : 38}px;
          border-radius: ${size == 'l' ? `${theme.borderRadius[4]}` : `${theme.borderRadius[2]}`}px;
          background-color: ${theme.colors.tertiary};
        `
      : css`
          min-width: 82px;
          min-height: 32px;
          border-radius: ${theme.borderRadius[0]}px;
          border: 1px solid ${theme.colors.primary};
        `}
`;
