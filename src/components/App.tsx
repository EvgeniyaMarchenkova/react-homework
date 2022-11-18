import React,  { useState }  from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import ErrorBoundary from './ErrorBoundary';

const App = () => {
  const [ searchText, setSearchText ] = useState('');

  return <>
    <Header searchText={ searchText } onChangedSearchText={ setSearchText }/>
    <ErrorBoundary>
      <MainContent searchText={ searchText }/>
      </ErrorBoundary>
    <Footer/>
    </>;  
};

export default App;