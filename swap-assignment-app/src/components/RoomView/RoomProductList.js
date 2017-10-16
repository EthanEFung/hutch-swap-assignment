import React, { Component } from "react";
import RoomProductEntry from "./RoomProductEntry";

class RoomProductList extends Component {
  render() {
    const {
      products,
      handleRoomProductClick,
      viewedProduct,
      roomStyle
    } = this.props;
    return (
      <div>
        {!!products ? (
          products.map((product, i) => (
            <RoomProductEntry
              key={i}
              viewedProduct={viewedProduct}
              product={product}
              roomStyle={roomStyle}
              handleRoomProductClick={handleRoomProductClick}
            />
          ))
        ) : (
          <div>loading products...</div>
        )}
      </div>
    );
  }
}

export default RoomProductList;
