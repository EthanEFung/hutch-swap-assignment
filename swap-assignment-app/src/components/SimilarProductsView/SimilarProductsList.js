import React, { Component } from "react";

class SimilarProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasSimilarProducts: false
    };
  }

  componentDidUpdate() {}

  render() {
    let { similar_producs } = this.props;

    return (
      <div>
        <div>Similar Products</div>
        {!!similar_producs && similar_producs.length > 0
          ? similar_producs.map((product, i) => (
              <div key={i} {...product}>
                <img src={product.url} alt={product.url} />
              </div>
            ))
          : null}
      </div>
    );
  }
}

export default SimilarProductsList;
