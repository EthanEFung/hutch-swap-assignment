import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import RoomView from "./components/RoomView/RoomView";
import SimilarProductsView from "./components/SimilarProductsView/SimilarProductsView";
import getData from "./dummyData";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    getData.then(res => console.log(res));
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
