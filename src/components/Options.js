import React from 'react';
import Option from './Option';

const Options = (props) => {
  return (
    <div>
      <p>Your options <button>Remove All</button></p>
      {props.options.length > 0 && props.options.map((opt) => (<Option key={opt} option={opt}/>)) }      
    </div>
  );
};

export default Options;