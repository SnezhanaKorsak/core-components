import styled from 'styled-components';

import { theme } from '../../../theme';
import { TitleProps } from './types';

const fontSizes = [0, 46, 38, 30, 22, 20, 16, 14];
const heightLine = [0, 60, 56, 40, 33, 30, 24, 24];
/*
const fontWeight = {
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
};
*/

export const StyledTitle = styled.div<TitleProps>`
  font-size: ${({ level }) => fontSizes[level] || 20}px;
  font-weight: ${({ weight }) => (weight ? theme.fontWeight[weight] : 500)};
  line-height: ${({ level }) => heightLine[level] || 30}px;
  font-family: ${theme.fonts[0]};
  letter-spacing: ${({ level }) => (level === 7 ? -0.01 : -0.015)}em;
  color: ${({ color }) => color || 'inherit'};
`;
