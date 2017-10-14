import React, { Component } from "react";
import SimilarProductsList from "./SimilarProductsList";
class SimilarProductsView extends Component {
  render() {
    return (
      <div>
        <div className="current-product-banner">
          {this.props.currentProduct.type}
        </div>
        <SimilarProductsList {...this.props.currentProduct} />
      </div>
    );
  }
}

export default SimilarProductsView;
