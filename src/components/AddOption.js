import React from 'react';

const AddOption = (props) => {
  
  const handleSubmit = (event) => {
    event.preventDefault();

    const value = event.target.elements.option.value.trim();
    console.log(value);
    const error = props.handleAddOption(value);
    if(!error) {
      event.target.elements.option.value = "";
    }
     else console.log(error);
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="option" placeholder="Enter your Option here" />
        <button>AddOption</button>
      </form>
    </div>
  );
};

export default AddOption;