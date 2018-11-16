import React from 'react';

function ProductRow(props) {
  return (
    <div>
      <label>{props.name}</label>
      <label>{props.price}</label>
    </div>
  )
}

export default ProductRow; 