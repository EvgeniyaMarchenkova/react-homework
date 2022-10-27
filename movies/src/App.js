import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Search from './components/Search';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Search/>
      <Counter/>
    </div>
  );
}

export default App;