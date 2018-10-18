import React from 'react';
import Option from './Option';

const Options = (props) => {
  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Your options</h3>
        <button className="button button--link" onClick={props.handleRemoveAll}>Remove All</button>
      </div>

      <div className="widget-body">
        {props.options.length === 0 && <p className="widget__message">Please add an option to get started</p>}
        {props.options.map((option, index) =>
          <Option key={option}
            option={option}
            count={index + 1}
            handleRemove={props.handleRemove}
          />)}
      </div>
      
    </div>

  );
};

export default Options;