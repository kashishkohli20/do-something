import React from 'react';

const Action = (props) => {
  return (
    <div>
      <button onClick={props.handleAction} disabled={props.disabled}>What should I do?</button>
    </div>
  );
};

export default Action;