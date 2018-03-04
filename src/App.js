import React, { Component } from 'react';
import './App.css';
import EditableHeading from './EditableHeading';
import EditableText from './EditableText';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Build your own race!</p>
        <EditableHeading />
        <EditableText />
      </div>
    );
  }
}

export default App;
