import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NotFoundWrapper = styled.div`
  width: 100%;
  line-height: 40px;
  text-align: center;
`;

const NotFoundPage = () => {
  return (
    <NotFoundWrapper>
      {' '}
      <div>404 Not Found</div>{' '}
      <div>
        Please go to <Link to="/">Home</Link> page
      </div>
    </NotFoundWrapper>
  );
};

export default NotFoundPage;
