import "./Rating.css";

import PropTypes from "prop-types";

const Rating = ({ rating }) => {
  return (
    <div className="rating-container">
      {Array.from({ length: rating }).map((_, index) => (
        <img key={index} src="/icons/cupcake.png" alt="cupcake" id="cupcake" />
      ))}
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
