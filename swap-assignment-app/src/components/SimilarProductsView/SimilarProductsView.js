import React, { Component } from "react";
import SimilarProductsList from "./SimilarProductsList";
class SimilarProductsView extends Component {
  render() {
    const { currentProduct, handleSimilarProductClick } = this.props;

    const viewStyle = {
      float: "left"
    };

    return (
      <div style={viewStyle}>
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
