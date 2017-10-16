import React, { Component } from "react";

class RoomProductEntry extends Component {
  render() {
    const { handleRoomProductClick, product, viewedProduct } = this.props;
    // console.log("entry props", product);

    const view =
      product.id.toString() === viewedProduct.alt
        ? viewedProduct.url
        : product.url;

    const productStyle = {
      position: "absolute",
      zIndex: product.index,
      top: product.top * 7.5,
      left: product.left * 7.5,
      width: product.width * 7.5,
      height: product.height * 7.5
    };

    console.log(productStyle);

    return (
      <img
        key={product.id}
        src={view}
        alt={product.id}
        onClick={handleRoomProductClick}
        style={productStyle}
      />
    );
  }
}

export default RoomProductEntry;
