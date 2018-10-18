import React from 'react';

const Action = (props) => {
  return (
      <button
        className="big-button"
        onClick={props.handleAction}
        disabled={props.disabled}
      >
        What should I do?
      </button>
  );
};

export default Action;