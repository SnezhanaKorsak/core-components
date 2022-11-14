import React from 'react';
import { CollapseProps } from './types';
import { StyledCollapse, StyledCollapseIcon } from './styled';

import expandMoreIcon from '../../assets/icons/expand_more.svg';
import expandLessIcon from '../../assets/icons/expand_less.svg';

const Collapse: React.FC<CollapseProps> = ({
  children,
  collapsedLabel,
  expandedLabel,
  expanded = false,
  openIcon,
  closeIcon,
  clickHandler,
}) => {
  const expandMore = openIcon || <img src={expandMoreIcon} alt="icon" />;
  const expandLess = closeIcon || <img src={expandLessIcon} alt="icon" />;

  return (
    <>
      <StyledCollapse>
        {expanded ? expandedLabel || collapsedLabel : collapsedLabel}

        <StyledCollapseIcon onClick={clickHandler}>
          {expanded ? expandLess : expandMore}
        </StyledCollapseIcon>
      </StyledCollapse>

      {expanded && children}
    </>
  );
};

export default Collapse;
