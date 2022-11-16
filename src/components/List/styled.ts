import styled from 'styled-components';

export const StyledUList = styled.ul<{ marker?: string }>`
  box-sizing: border-box;

  li {
    list-style-type: ${({ marker }) => marker && 'none'};
  }
`;

export const StyledOList = styled.ol`
  box-sizing: border-box;
`;

export const StyledLi = styled.li`
  display: flex;
  align-items: center;
`;

export const Marker = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 10px;
  line-height: inherit;
`;
