import React, { Component } from "react";
import SimilarProductEntry from "./SimilarProductEntry";

class SimilarProductsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    };
  }

  render() {
    const { currentProduct } = this.props;

    const list = !!currentProduct.similar_producs
      ? [currentProduct, ...currentProduct.similar_producs]
      : [currentProduct];

    return (
      <div>
        <div>Similar Products</div>
        {list.map((product, i) => (
          <SimilarProductEntry
            key={i}
            currentProduct={currentProduct}
            similarProduct={product}
            handleSimilarProductClick={this.props.handleSimilarProductClick}
          />
        ))}
      </div>
    );
  }
}

export default SimilarProductsList;
