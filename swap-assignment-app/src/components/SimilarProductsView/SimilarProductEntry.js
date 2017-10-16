import React, { Component } from "react";
class SimilarProductEntry extends Component {
  render() {
    const {
      handleSimilarProductClick,
      currentProduct,
      similarProduct
    } = this.props;

    const containerStyle = {
      border: "1px solid black",
      width: "300px",

      margin: "10px",
      padding: "5px 5px 5px 5px"
    };

    const productStyle = {
      height: 100
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
          {similarProduct.price}
        </div>
      </div>
    );
  }
}

export default SimilarProductEntry;
