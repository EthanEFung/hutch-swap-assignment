import React, { Component } from "react";
import Product from "../Product";

class RoomView extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        {this.props.products.map(product => {
          return (
            <div {...product} onClick={this.props.handleRoomProductClick}>
              {product.id}
            </div>
          );
        })}
      </div>
    );
  }
}

export default RoomView;
