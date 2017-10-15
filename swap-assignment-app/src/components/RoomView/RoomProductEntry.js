import React, { Component } from "react";

class RoomProductEntry extends Component {
  render() {
    const { id, url, handleRoomProductClick, product } = this.props;
    return (
      <div>
        <img
          key={id}
          src={url}
          alt={id}
          {...product}
          onClick={handleRoomProductClick}
        />
      </div>
    );
  }
}

export default RoomProductEntry;
