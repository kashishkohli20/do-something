import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Action from './components/Action';
import AddOption from './components/AddOption';
import Options from './components/Options';
import OptionModal from './components/OptionModal';

class App extends Component {

  state = {
    options: [],
    selectedOption: undefined
  }

  handleAction = () => {
    const random = Math.floor(Math.random() * this.state.options.length);
    const value = this.state.options[random];
    console.log(value);
    this.setState(() => {
      return {
        selectedOption: value
      }
    });
  }

  handleRemoveAll = () => {
    this.setState({ options: [] });
  }

  handleRemove = (optionToDelete) => {
    this.setState((prevState) => ({ options: prevState.options.filter((opt) => (opt !== optionToDelete)) }));
  }

  handleAddOption = (v) => {
    if (v === "") {
      return "Add a valid entry"
    } else if (this.state.options.includes(v)) {
      return "This entry already exists"
    } else {
      this.setState((prevState) => ({ options: [...prevState.options, v] }));
    }
  }

  handleSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      this.setState(() => ({ options }));
    } catch(e) {

    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Action
          handleAction={this.handleAction}
          disabled={this.state.options.length === 0 ? true : false}
        />
        <Options
          options={this.state.options}
          handleRemoveAll={this.handleRemoveAll}
          handleRemove={this.handleRemove}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleSelectedOption={this.handleSelectedOption}
        />
      </div>
    );
  }
}

export default App;
