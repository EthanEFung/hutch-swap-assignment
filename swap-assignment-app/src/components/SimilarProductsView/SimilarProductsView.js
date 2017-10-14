import React, { Component } from "react";
import SimilarProductsList from "./SimilarProductsList";
class SimilarProductsView extends Component {
  render() {
    const { currentProduct } = this.props;
    return (
      <div>
        <div className="current-product-banner">{currentProduct.type}</div>
        <SimilarProductsList
          {...currentProduct}
          handleSimilarProductClick={this.props.handleSimilarProductClick}
        />
      </div>
    );
  }
}

export default SimilarProductsView;
