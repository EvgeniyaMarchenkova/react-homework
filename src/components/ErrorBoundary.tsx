import React from 'react';
import { movies } from './MoviesGrid';

let ErrorBoundary = (props: any) => {
  const isDataLoaded = !!movies.length;
  return <>
    { isDataLoaded ? props.children : <h1>The error occurs. Try again later.</h1> }
  </>;
};

export default ErrorBoundary;