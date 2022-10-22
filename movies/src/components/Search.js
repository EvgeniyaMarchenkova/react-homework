import React from 'react';

let Search = () => {
  let searchText = '';
  const reset = () => {
    searchText = '';
  }

  const updateSearchText = (value) => {
    searchText = value;
  }

  return <div>
    <input
      defaultValue={searchText}
      onChange={() => updateSearchText}
      type="text"
      label="What do yoy want to watch?"></input>
    <button onClick={() => reset}>Search</button>
  </div>
  
}

export default Search;
