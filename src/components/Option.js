import React from 'react';

const Option = (props) => {
  return (
    <div>
      <p>{props.option} <button>Remove</button></p>
    </div>
  );
};

export default Option;