import React from 'react';

function CheckBox(props) {
  return (
    <div>
      <input type="checkbox" checked={props.enabled} onChange={props.eventHandler}/>
      <label onClick={props.eventHandler}>{props.description}</label>
    </div>
  )
}

export default CheckBox;
