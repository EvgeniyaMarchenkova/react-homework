import React from 'react';
import styled from 'styled-components';

export const SORT_LIST = [
  {
    value: 'title',
    label: 'title',
  },
  {
    value: 'vote_average',
    label: 'rating',
  },
  {
    value: 'release_date',
    label: 'date',
  },
] as const;

const Wrapper = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-between;
`;

const Sorting = (props: any) => {
  return (
    <Wrapper>
      <span>Sort by: </span>
      {SORT_LIST.map((item) => (
        <span key={item.value} onClick={() => props.onChangeSort(item.value)}>
          {item.label}
        </span>
      ))}
    </Wrapper>
  );
};

export default Sorting;
