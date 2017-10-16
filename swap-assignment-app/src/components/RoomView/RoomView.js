import React, { Component } from "react";
import RoomProductList from "./RoomProductList";

class RoomView extends Component {
  render() {
    const {
      roomPhoto,
      products,
      handleRoomProductClick,
      viewedProduct
    } = this.props;
    return (
      <div>
        <img src={roomPhoto} alt={roomPhoto} />
        <RoomProductList
          viewedProduct={viewedProduct}
          handleRoomProductClick={handleRoomProductClick}
          products={products}
        />
      </div>
    );
  }
}

export default RoomView;
