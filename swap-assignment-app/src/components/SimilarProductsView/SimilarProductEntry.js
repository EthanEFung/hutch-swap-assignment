import React, { Component } from "react";
class SimilarProductEntry extends Component {
  render() {
    const {
      handleSimilarProductClick,
      currentProduct,
      similarProduct
    } = this.props;

    const containerStyle = {
      border: "1px solid #666",
      width: 100,
      margin: 10,
      padding: 5,
      cursor: "pointer",
      boxShadow: "2px 2px 5px #999"
    };

    const productStyle = {
      height: 40
    };

    return (
      <div
        className="similar-product-entry-container"
        key={currentProduct.url}
        url={currentProduct.url}
        onClick={handleSimilarProductClick}
        style={containerStyle}
      >
        <img
          src={similarProduct.url}
          alt={currentProduct.id}
          url={similarProduct.url}
          style={productStyle}
        />
        <div className="price" url={similarProduct.url}>
          Price: ${similarProduct.price}
        </div>
      </div>
    );
  }
}

export default SimilarProductEntry;
