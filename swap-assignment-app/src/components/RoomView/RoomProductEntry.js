import React, { Component } from "react";

class RoomProductEntry extends Component {
  render() {
    const {
      handleRoomProductClick,
      product,
      viewedProduct,
      roomStyle
    } = this.props;
    // console.log("entry props", product);

    const view =
      product.id.toString() === viewedProduct.alt
        ? viewedProduct.url
        : product.url;

    const productStyle = {
      position: "absolute",
      zIndex: product.index,
      top: product.top / 100 * roomStyle.width,
      left: product.left / 100 * roomStyle.width,
      width: product.width / 100 * roomStyle.width,
      height: product.height / 100 * roomStyle.width,
      cursor: "pointer"
    };

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
