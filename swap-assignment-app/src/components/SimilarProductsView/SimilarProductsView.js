import React, { Component } from "react";
import SimilarProductsList from "./SimilarProductsList";
class SimilarProductsView extends Component {
  render() {
    const { currentProduct, handleSimilarProductClick } = this.props;

    const viewStyle = {
      float: "left",
      width: 150
    };

    const bannerStyle = {
      width: "95%",
      border: "1px solid #777",
      margin: "0 25 0 25",
      padding: 6,
      backgroundColor: "#fff"
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
