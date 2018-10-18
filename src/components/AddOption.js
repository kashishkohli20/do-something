import React, { Component } from 'react';

class AddOption extends Component {
  state = {
    error: undefined
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const value = event.target.elements.option.value.trim();
    const error = this.props.handleAddOption(value);

    this.setState(() => ({ error }));
    if (!error) {
      event.target.elements.option.value = "";
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleSubmit}>
          <input className="add-option__input" name="option" placeholder="Enter your Option here" />
          <button className="button">AddOption</button>
        </form>
      </div>
    );
  }

};

export default AddOption;