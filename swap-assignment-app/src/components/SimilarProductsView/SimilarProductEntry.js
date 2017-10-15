import React, { Component } from "react";

class SimilarProductEntry extends Component {
  render() {
    const { handleSimilarProductClick, url, price } = this.props.product;

    return (
      <div
        className="similar-product-entry-container"
        key={url}
        url={url}
        onClick={this.props.handleSimilarProductClick}
      >
        <img src={url} alt={url} url={url} />
        <div className="price" url={url}>
          {price}
        </div>
      </div>
    );
  }
}

export default SimilarProductEntry;
