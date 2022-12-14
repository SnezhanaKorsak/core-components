import styled from 'styled-components';

import { theme } from '../../../theme';
import { TextProps } from './types';

const fontSizes = [0, 20, 16, 14];
const heightLine = [0, 33, 28, 24];

export const StyledText = styled.div<TextProps>`
  font-size: ${({ level }) => fontSizes[level] || 14}px;
  font-weight: ${({ weight }) => (weight ? theme.fontWeight[weight] : 400)};
  line-height: ${({ level }) => heightLine[level] || 24}px;
  font-family: ${({ font }) => font && 'inherit'};
  letter-spacing: -0.015em;
  color: ${({ color }) => color || 'inherit'};
  text-align: ${({ textAlign }) => textAlign || 'inherit'};
`;
