import React, { Component } from "react";

class RoomView extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        {products.map(product => {
          const { id, url } = product;
          return (
            <img
              key={id}
              src={url}
              alt={id}
              {...product}
              onClick={this.props.handleRoomProductClick}
            />
          );
        })}
      </div>
    );
  }
}

export default RoomView;
