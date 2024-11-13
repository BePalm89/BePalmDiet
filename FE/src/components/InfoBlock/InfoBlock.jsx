import "./InfoBlock.css";

import PropTypes from "prop-types";

import Rating from "../Rating/Rating";
import Difficulty from "../Difficulty/Difficulty";

const InfoBlock = ({ title, description }) => {
  return (
    <p className="info-block-container">
      {title && <span className="info-block-title">{title}: </span>}{" "}
      {title ? (
        title.toLowerCase() === "difficulty" ? (
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--gap-xs)",
            }}
          >
            <span>{description}</span> (
            <Difficulty difficulty={description} variant="relative" />)
          </span>
        ) : title.toLowerCase() === "rating" ? (
          <span>
            <Rating rating={Number(description)} />
          </span>
        ) : (
          <span>{description}</span>
        )
      ) : (
        <span>{description}</span>
      )}
    </p>
  );
};

InfoBlock.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
};

export default InfoBlock;
