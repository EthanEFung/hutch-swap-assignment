import React, { Component } from "react";
import SimilarProductEntry from "./SimilarProductEntry";

class SimilarProductsList extends Component {
  render() {
    const { similar_producs, handleSimilarProductClick } = this.props;

    return (
      <div>
        <div>Similar Products</div>
        {!!similar_producs && similar_producs.length > 0
          ? similar_producs.map((product, i) => (
              <SimilarProductEntry
                key={i}
                {...product}
                handleSimilarProductClick={handleSimilarProductClick}
              />
            ))
          : null}
      </div>
    );
  }
}

export default SimilarProductsList;
