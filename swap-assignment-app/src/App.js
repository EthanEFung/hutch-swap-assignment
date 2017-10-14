import React, { Component } from "react";
// import logo from "./logo.svg";
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
      products: [],
      current_product: ""
    };

    this.handleRoomProductClick = this.handleRoomProductClick.bind(this);
  }

  componentDidMount() {
    getData.then(res => {
      this.setState(res);
      this.setState({ current_product: this.state.products[0] }, () =>
        console.log("STATE: ", this.state)
      );
    });
  }

  handleRoomProductClick() {
    console.log("handleRoomProductClick");
  }

  render() {
    const { room_type, room_photo, products, current_product } = this.state;
    return (
      <div className="App">
        <RoomView
          roomType={room_type}
          roomPhoto={room_photo}
          products={products}
          handleRoomProductClick={this.handleRoomProductClick}
        />
        <SimilarProductsView
          products={products}
          currentProduct={current_product}
        />
      </div>
    );
  }
}

export default App;
