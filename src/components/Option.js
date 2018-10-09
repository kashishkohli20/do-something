import React from 'react';

const Option = (props) => {
  return (
    <div>
      <p>{props.option} <button onClick={() => props.handleRemove(props.option)}>Remove</button></p>
    </div>
  );
};

export default Option;