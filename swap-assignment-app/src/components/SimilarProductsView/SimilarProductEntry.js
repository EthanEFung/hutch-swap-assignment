import React, { Component } from "react";

class SimilarProductEntry extends Component {
  render() {
    console.log(this.props);
    const { i, handleSimilarProductClick, url, price } = this.props;
    return (
      <div key={i} onClick={handleSimilarProductClick}>
        <img src={url} alt={url} />
        <div className="price">{price}</div>
      </div>
    );
  }
}

export default SimilarProductEntry;
