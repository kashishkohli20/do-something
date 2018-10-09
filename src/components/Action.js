import React from 'react';

const Action = (props) => {
  return (
    <div>
      <button onClick={props.handleAction}>What should I do?</button>
    </div>
  );
};

export default Action;