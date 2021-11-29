/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import './App.css';
import BoxList from './BoxList'
// import Box from './Box'

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
         <BoxList />
      </div>
  );
  }
  
}

export default App;
