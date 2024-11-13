import "./Image.css";

import PropTypes from "prop-types";

import Title from "../Title/Title";

const Image = ({ title, description, urlPhoto }) => {
  return (
    <div
      className="recipe-img-container"
      style={{ backgroundImage: `url(${urlPhoto})` }}
    >
      <Title text={title} level={3} />
      <Title text={description} level={4} />
    </div>
  );
};

Image.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  urlPhoto: PropTypes.string.isRequired,
};

export default Image;
