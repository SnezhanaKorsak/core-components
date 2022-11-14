import styled, { css } from 'styled-components';

import { theme } from '../../theme';

export const Wrapper = styled.div<{ block?: boolean }>`
  box-sizing: border-box;
  width: ${({ block }) => (block ? '100%' : '328px')};
  font-size: ${theme.sizes.fontSizes[1]}px;
  font-weight: ${theme.sizes.fontWeight[3]};
  line-height: ${theme.sizes.fontSizes[6]}px;
  font-family: ${theme.fonts[1]};
  letter-spacing: 0.015em;
`;

export const SelectMenu = styled.div<{ disabled: boolean }>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 54px;
  border: 1px solid ${theme.colors.black};
  border-radius: ${theme.borderRadius[0]}px;
  padding: 15px 25px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;
export const SelectContainer = styled.div<{ visibleOptions?: number }>`
  height: ${({ visibleOptions }) =>
    visibleOptions ? css`calc(44px * ${visibleOptions})` : 'auto'};
  overflow: auto;
  font-family: ${theme.fonts[0]};
  font-weight: ${theme.sizes.fontWeight[2]};
  border-radius: 0 0 ${theme.borderRadius[0]}px ${theme.borderRadius[0]}px;
  background-color: ${theme.colors.background};
`;

export const StyledCollapseIcon = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.div<{ active: boolean }>`
  box-sizing: border-box;
  height: 44px;
  background-color: ${({ active }) => (active ? theme.colors.helperBlue4 : 'transparent')};
  padding: 10px 25px;

  &:hover {
    background-color: ${theme.colors.helperBlue4};
  }
`;
