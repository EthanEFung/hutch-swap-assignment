import React, { Component } from "react";
import RoomProductList from "./RoomProductList";

class RoomView extends Component {
  render() {
    const { roomPhoto, products, handleRoomProductClick } = this.props;
    return (
      <div>
        <img src={roomPhoto} alt={roomPhoto} />
        <RoomProductList
          handleRoomProductClick={handleRoomProductClick}
          products={products}
        />
      </div>
    );
  }
}

export default RoomView;
