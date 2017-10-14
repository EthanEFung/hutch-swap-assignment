import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import RoomView from "./components/RoomView/RoomView";
import SimilarProductsView from "./components/SimilarProductsView/SimilarProductsView";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <RoomView />
        <SimilarProductsView />
      </div>
    );
  }
}

export default App;
