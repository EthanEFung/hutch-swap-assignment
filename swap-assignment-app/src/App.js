import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import RoomView from "./components/RoomView/RoomView";
import SimilarProductsView from "./components/SimilarProductsView/SimilarProductsView";
import getData from "./dummyData";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room_type: "",
      room_photo: "",
      products: []
    };
  }

  componentDidMount() {
    getData.then(res => {
      this.setState(res, () => console.log("this is the state", this.state));
    });
  }
  render() {
    const { room_type, room_photo, products } = this.state;
    return (
      <div className="App">
        <RoomView
          roomType={room_type}
          roomPhoto={room_photo}
          products={products}
        />
        <SimilarProductsView products={products} />
      </div>
    );
  }
}

export default App;
