import PropTypes from "prop-types";
import React, { Fragment } from "react";

// ---------------- 별모양 나타내는 부분을 따로 구성해 놓았다.

const ProductRating = ({ ratingValue }) => {
  let rating = [];

  for (let i = 0; i < 5; i++) {
    rating.push(<i className="far fa-star" key={i}></i>);
  }
  if (ratingValue && ratingValue > 0) {
    for (let i = 0; i <= ratingValue - 1; i++) {
      rating[i] = <i className="fas fa-star" key={i}></i>;
    }
  }
  return (
    <Fragment>
        {rating}
    </Fragment>
  );
}

ProductRating.propTypes = {
  ratingValue: PropTypes.number
};

export default ProductRating;
