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

    const viewStyle = {
      position: "relative",
      float: "left"
    };

    const roomStyle = {
      width: 300
    };

    return (
      <div className="room-view" style={viewStyle}>
        <img src={roomPhoto} alt="room" style={roomStyle} />
        <RoomProductList
          roomStyle={roomStyle}
          viewedProduct={viewedProduct}
          handleRoomProductClick={handleRoomProductClick}
          products={products}
        />
      </div>
    );
  }
}

export default RoomView;
