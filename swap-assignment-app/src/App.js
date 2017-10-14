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
    this.handleSimilarProductClick = this.handleSimilarProductClick.bind(this);
    this.findTargetProduct = this.findTargetProduct.bind(this);
  }

  componentDidMount() {
    getData.then(res => {
      this.setState(res);
      this.setState({ current_product: this.state.products[0] }, () =>
        console.log("STATE: ", this.state)
      );
    });
  }

  findTargetProduct(targetId) {
    return new Promise(resolve => {
      resolve(() => {
        for (let product of this.state.products) {
          if (product.id.toString() === targetId) {
            this.setState({ current_product: product });
          }
        }
      });
    });
  }

  handleRoomProductClick(e) {
    this.findTargetProduct(e.target.id)
      .then(res => res())
      .then(() => console.log("promisified", this.state))
      .catch(err => console.log("something went wrong", err));
  }

  handleSimilarProductClick(e) {
    console.log("i hear you");
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
