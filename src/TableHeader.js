import React from 'react';

function TableHeader(props) {
  return (
    <div>
      <label>{props.headers[0]}</label>
      <label>{props.headers[1]}</label>
    </div>
  );
}

export default TableHeader; 
