import React from 'react';

function SearchBarSection(props) {
  return (
    <div>
      <input value={props.placeholder} onChange={props.eventHandler}></input>
      <button>Filter</button>
    </div>
  )
}

export default SearchBarSection;