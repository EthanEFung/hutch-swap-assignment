import React, { Component } from "react";
// import logo from "./logo.svg";
import "../App.css";
import RoomView from "./RoomView/RoomView";
import SimilarProductsView from "./SimilarProductsView/SimilarProductsView";
import getData from "../dummyData";

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
    this.handleSimilarProductClick = this.handleSimilarProductClick.bind(this);
  }

  componentDidMount() {
    getData
      .then(res => this.setState(res))
      .then(() => this.setState({ current_product: this.state.products[0] }));
  }

  handleRoomProductClick(e) {
    e.preventDefault();
    const targetId = e.target.alt;
    for (let product of this.state.products) {
      if (product.id.toString() === targetId) {
        this.setState({ current_product: product });
      }
    }
  }

  handleSimilarProductClick(e) {
    e.preventDefault();
    console.log(e.target.attributes.url.value);
  }

  render() {
    const { room_type, room_photo, products, current_product } = this.state;
    return (
      <div className="App">
        <div>{room_type}</div>
        <RoomView
          roomType={room_type}
          roomPhoto={room_photo}
          products={products}
          handleRoomProductClick={this.handleRoomProductClick}
        />
        <SimilarProductsView
          products={products}
          currentProduct={current_product}
          handleSimilarProductClick={this.handleSimilarProductClick}
        />
      </div>
    );
  }
}

export default App;
