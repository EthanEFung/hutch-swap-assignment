import React, { Component } from "react";
import SimilarProductsList from "./SimilarProductsList";
class SimilarProductsView extends Component {
  render() {
    const { currentProduct, handleSimilarProductClick } = this.props;

    const viewStyle = {
      float: "left",
      width: 300
    };

    const bannerStyle = {
      width: 250,
      margin: "0 25 0 25",
      backgroundColor: "#eee"
    };

    return (
      <div style={viewStyle}>
        <div className="current-product-banner" style={bannerStyle}>
          {currentProduct.type}
        </div>
        <SimilarProductsList
          currentProduct={currentProduct}
          handleSimilarProductClick={handleSimilarProductClick}
        />
      </div>
    );
  }
}

export default SimilarProductsView;
