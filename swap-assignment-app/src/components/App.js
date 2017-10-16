import React, { Component } from "react";
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
      current_product: {},
      viewed_product: {}
    };
    this.handleRoomProductClick = this.handleRoomProductClick.bind(this);
    this.handleSimilarProductClick = this.handleSimilarProductClick.bind(this);
  }

  componentDidMount() {
    getData.then(res => this.setState(res)).then(() => {
      const current_product = this.state.products[0];
      const { url, price } = current_product;
      const similar_products = [
        { url, price },
        ...current_product.similar_producs
      ];

      this.setState({
        current_product,
        similar_products
      });
    });
  }

  handleRoomProductClick(e) {
    e.preventDefault();
    const targetId = e.target.getAttribute("alt");
    for (let product of this.state.products) {
      if (product.id.toString() === targetId) {
        this.setState({ current_product: product });
      }
    }
  }

  handleSimilarProductClick(e) {
    let url = e.target.getAttribute("url");
    let alt = e.target.getAttribute("alt");
    let price = e.target.getAttribute("price");

    for (let product of this.state.products) {
      if (product.id.toString() === alt) {
        this.setState({ viewed_product: { url, alt, price } }, () => {
          console.log(this.state);
        });
      }
    }
  }

  render() {
    const {
      room_type,
      room_photo,
      products,
      current_product,
      viewed_product
      // similar_products
    } = this.state;

    const appStyle = {
      fontSize: 18,
      fontFamily: "helvetica-neue",
      textAlign: "center"
    };

    return (
      <div className="App" style={appStyle}>
        <RoomView
          roomType={room_type}
          roomPhoto={room_photo}
          products={products}
          currentProduct={current_product}
          viewedProduct={viewed_product}
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
