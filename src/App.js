import React, { Component } from 'react';
import logo from './logo.svg';
import Star from './Star';
import Comment from './Comment';
import UserInfo from './UserInfo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hello React</h2>
          <Star likeText='赞' unlikeText='已赞'/>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Comment/>
        <UserInfo/>
      </div>
    );
  }
}

export default App;
