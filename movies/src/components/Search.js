import React,  { useState } from 'react';

let Search = () => {
  const [ searchText, setSearchText ] = useState('');

  return <div>
    <input
      value={searchText}
      onChange={(ev) => setSearchText(ev.target.value)}
      type="text"
      label="What do yoy want to watch?"></input>
    <button onClick={() => setSearchText('')}>Reset Search</button>
  </div>  
}

export default Search;
