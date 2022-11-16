import React, { useState, ReactNode, Children } from 'react';
import { SelectProps } from './types';
import { StyledCollapseIcon, SelectMenu, Wrapper, Item, SelectContainer } from './styled';

import expandMoreIcon from '../../assets/icons/expand_more.svg';
import expandLessIcon from '../../assets/icons/expand_less.svg';

const Select: React.FC<SelectProps> = ({
  children,
  label,
  block,
  visibleOptions,
  disabled,
  changeHandler,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [selectedItem, setSelectedItem] = useState(label);

  const childrenCount = Children.count(children);

  const changeSelectedItem = (value: string | number | ReactNode) => () => {
    setSelectedItem(value);

    changeHandler && changeHandler(value);
  };

  const mappedOptions = Children.map(children, (child) => (
    <Item active={selectedItem === child} onClick={changeSelectedItem(child)}>
      {child}
    </Item>
  ));

  const visibleOptionsCount =
    visibleOptions && visibleOptions > childrenCount ? childrenCount + 1 : visibleOptions;

  const clickHandler = () => !disabled && setExpanded(!expanded);

  const setInitialValue = () => setSelectedItem(label);

  return (
    <Wrapper onClick={clickHandler} block={block}>
      <SelectMenu disabled={disabled}>
        {selectedItem || label}
        <StyledCollapseIcon>
          {expanded ? (
            <img src={expandLessIcon} alt="icon" />
          ) : (
            <img src={expandMoreIcon} alt="icon" />
          )}
        </StyledCollapseIcon>
      </SelectMenu>

      {expanded && (
        <SelectContainer visibleOptions={visibleOptionsCount}>
          <Item active={selectedItem === label} onClick={setInitialValue}>
            {label}
          </Item>

          {mappedOptions}
        </SelectContainer>
      )}
    </Wrapper>
  );
};

export default Select;
