import React, { Component } from "react";
import SimilarProductsList from "./SimilarProductsList";
class SimilarProductsView extends Component {
  render() {
    const { currentProduct, handleSimilarProductClick } = this.props;
    const { type, price, url } = currentProduct;

    return (
      <div>
        <div className="current-product-banner">{currentProduct.type}</div>
        <SimilarProductsList
          currentProduct={currentProduct}
          handleSimilarProductClick={handleSimilarProductClick}
        />
      </div>
    );
  }
}

export default SimilarProductsView;
