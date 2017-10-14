import React, { Component } from "react";

class RoomView extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        {this.props.products.map(product => (
          <img
            key={product.id}
            src={product.url}
            alt={product.id}
            {...product}
            onClick={this.props.handleRoomProductClick}
          />
        ))}
      </div>
    );
  }
}

export default RoomView;
