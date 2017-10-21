import React, { Component } from "react";
import "../App.css";

import Search from "./Search";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Photo Gallery</h1>
        </header>
        <div className="App-body container">
          <Search />
        </div>
      </div>
    );
  }
}

export default App;
