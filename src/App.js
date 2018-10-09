import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Action from './components/Action';
import AddOption from './components/AddOption';
import Options from './components/Options';

class App extends Component {

  state = {
    options: [1,2,3]
  }

  handleAction = () => {

  }

  render() {
    return (
      <div className="App">
        <Header />
        <Action
          handleAction={this.handleAction}
        />
        <Options
          options={this.state.options}
        />
        <AddOption />
      </div>
    );
  }
}

export default App;
