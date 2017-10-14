import React, { Component } from "react";

class RoomView extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        {this.props.products.map(product => (
          <div key={product.id} onClick={this.props.handleRoomProductClick}>
            {product.id}
          </div>
        ))}
      </div>
    );
  }
}

export default RoomView;
