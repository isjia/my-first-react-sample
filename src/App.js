import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NameCard from './components/NameCard'
import LikesButton from './components/LikesButton'

const tags = ['恐龙', '足球小子']

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <NameCard name="Hacker" number={1234567890} isHuman tags={ tags } />
        <br />
        <LikesButton />
      </div>
    );
  }
}

export default App;
