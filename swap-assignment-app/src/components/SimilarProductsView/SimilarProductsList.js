import React, { Component } from "react";
import SimilarProductEntry from "./SimilarProductEntry";

class SimilarProductsList extends Component {
  render() {
    const { currentProduct } = this.props;

    const similarItems =
      !!currentProduct.similar_producs &&
      currentProduct.similar_producs.length > 0
        ? [
            currentProduct,
            ...currentProduct.similar_producs
          ].map((product, i) => (
            <SimilarProductEntry
              key={i}
              currentProduct={currentProduct}
              similarProduct={product}
              handleSimilarProductClick={this.props.handleSimilarProductClick}
            />
          ))
        : "No similar items were found";

    const listStyle = {
      width: 250,
      padding: 5,
      fontSize: 12
    };

    return <div style={listStyle}>{similarItems}</div>;
  }
}

export default SimilarProductsList;
