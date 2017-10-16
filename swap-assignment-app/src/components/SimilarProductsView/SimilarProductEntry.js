import React, { Component } from "react";
const l = console.log;
class SimilarProductEntry extends Component {
  render() {
    const {
      handleSimilarProductClick,
      currentProduct,
      similarProduct
    } = this.props;

    return (
      <div
        className="similar-product-entry-container"
        key={currentProduct.url}
        url={currentProduct.url}
        onClick={handleSimilarProductClick}
      >
        <img
          src={similarProduct.url}
          alt={currentProduct.id}
          url={similarProduct.url}
        />
        <div className="price" url={similarProduct.url}>
          {similarProduct.price}
        </div>
      </div>
    );
  }
}

export default SimilarProductEntry;
