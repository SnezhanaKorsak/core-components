import React, { useState, ReactNode } from 'react';
import { SelectProps } from './types';
import { StyledCollapseIcon, SelectMenu, Wrapper, Item, SelectContainer } from './styled';

import expandMoreIcon from '../../assets/icons/expand_more.svg';
import expandLessIcon from '../../assets/icons/expand_less.svg';

const Select: React.FC<SelectProps> = ({
  label,
  options,
  block,
  visibleOptions,
  disabled,
  changeHandler,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [selectedItem, setSelectedItem] = useState(label);

  const visibleOptionsCount =
    visibleOptions && visibleOptions > options.length ? options.length + 1 : visibleOptions;

  const clickHandler = () => !disabled && setExpanded(!expanded);

  const changeSelectedItem = (value: string | number | ReactNode) => () => {
    setSelectedItem(value);

    changeHandler && changeHandler(value);
  };

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

          {options.map(({ id, content }) => (
            <Item key={id} active={selectedItem === content} onClick={changeSelectedItem(content)}>
              {content}
            </Item>
          ))}
        </SelectContainer>
      )}
    </Wrapper>
  );
};

export default Select;
