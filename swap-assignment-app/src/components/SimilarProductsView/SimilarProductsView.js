import React, { Component } from "react";
import SimilarProductsList from "./SimilarProductsList";
class SimilarProductsView extends Component {
  render() {
    const {
      currentProduct,
      handleSimilarProductClick,
      similarProducts
    } = this.props;
    const { type, price, url } = currentProduct;

    return (
      <div>
        <div className="current-product-banner">{currentProduct.type}</div>
        <SimilarProductsList
          currentProduct={currentProduct}
          similarProducts={similarProducts}
          handleSimilarProductClick={handleSimilarProductClick}
        />
      </div>
    );
  }
}

export default SimilarProductsView;
