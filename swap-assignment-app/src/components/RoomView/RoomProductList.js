import React, { Component } from "react";
import RoomProductEntry from "./RoomProductEntry";

class RoomProductList extends Component {
  render() {
    const { products, handleRoomProductClick } = this.props;
    return (
      <div>
        {!!products ? (
          products.map((product, i) => (
            <RoomProductEntry
              key={i}
              {...product}
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
