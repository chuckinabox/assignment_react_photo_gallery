import React, { Component } from "react";
import "../App.css";

import Photos from "./Photos";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Photo Gallery</h1>
        </header>
        <div className="App-body container">
          <Photos />
        </div>
      </div>
    );
  }
}

export default App;
