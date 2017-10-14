import React, { Component } from "react";

class SimilarProductsView extends Component {
  render() {
    return (
      <div>
        <div>I am the similar products view</div>
        <div className="current-product-banner">
          {this.props.currentProduct.type}
        </div>
      </div>
    );
  }
}

export default SimilarProductsView;
