import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

const Sorting = () => {
  return (
    <Wrapper>
      <span>Sort by: </span>
      <span> here will be sorting filter</span>
    </Wrapper>
  );
};

export default Sorting;