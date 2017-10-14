import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import RoomView from "./components/RoomView/RoomView";
import SimilarProductsView from "./components/SimilarProductsView/SimilarProductsView";

class App extends Component {
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
