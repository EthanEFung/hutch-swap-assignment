import React, { Component } from "react";

class RoomProductEntry extends Component {
  render() {
    const { url, handleRoomProductClick, product, viewedProduct } = this.props;

    const view =
      product.id.toString() === viewedProduct.alt
        ? viewedProduct.url
        : product.url;

    return (
      <div>
        <img
          key={product.id}
          src={view}
          alt={product.id}
          onClick={handleRoomProductClick}
        />
      </div>
    );
  }
}

export default RoomProductEntry;
