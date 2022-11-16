import React, { Children } from 'react';

import { ListProps } from './types';
import { StyledLi, StyledOList, StyledUList, Marker } from './styled';

const List: React.FC<ListProps> = ({ children, tag, marker }) => {
  const mappedOptions = Children.map(children, (child) =>
    marker ? (
      <StyledLi>
        <Marker>{marker}</Marker>
        {child}
      </StyledLi>
    ) : (
      <li>{child}</li>
    ),
  );

  console.log(marker?.toString());
  const ulMarker = marker?.toString();

  return (
    <>
      {tag === 'ul' ? (
        <StyledUList marker={ulMarker}>{mappedOptions}</StyledUList>
      ) : (
        <StyledOList>{mappedOptions}</StyledOList>
      )}
    </>
  );
};

export default List;
