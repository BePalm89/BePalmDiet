import "./InfoBlock.css";

import PropTypes from "prop-types";

import Rating from "../Rating/Rating";
import Difficulty from "../Difficulty/Difficulty";

const InfoBlock = ({ title, description, style="info-block-container" }) => {
  const renderContent = () => {
    if (!title) {
      return <span>{description}</span>;
    }

    if (title.toLowerCase() === "difficulty") {
      return (
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
      );
    }

    if (title.toLowerCase() === "rating") {
      return <Rating rating={Number(description)} />;
    }

    return <span>{description}</span>;
  };

  return (
    <div className={style}>
      {title && <span className="info-block-title">{title}: </span>}
      {renderContent()}
    </div>
  );
};

InfoBlock.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
  style: PropTypes.string,
};

export default InfoBlock;
