import React, { Component } from 'react';
import './App.css';

import { MainContainer } from "./components/MainContainer";
import { Header } from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <MainContainer />
      </div>
    );
  }
}

export default App;
