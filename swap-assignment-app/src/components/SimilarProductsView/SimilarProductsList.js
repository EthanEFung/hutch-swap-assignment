import React, { Component } from "react";
import SimilarProductEntry from "./SimilarProductEntry";

class SimilarProductsList extends Component {
  render() {
    console.log("list: ", this.props);
    return (
      <div>
        <div>Similar Products</div>
        {this.props.similarProducts.map((product, i) => (
          <SimilarProductEntry
            key={i}
            product={product}
            handleSimilarProductClick={this.props.handleSimilarProductClick}
          />
        ))}
      </div>
    );
  }
}

export default SimilarProductsList;
