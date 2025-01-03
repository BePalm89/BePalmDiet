import "./Banner.css";

import { useEffect } from "react";
import PropTypes from "prop-types";

const Banner = ({ isOpen, level, message, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return;

  return (
    <div className={`banner ${level}`}>
      <p>{message}</p>
      <div className={`close-btn-banner-container ${level}`} onClick={onClose}>
        <img src={`/icons/close-${level}.png`} alt="Close" />
      </div>
    </div>
  );
};

Banner.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  level: PropTypes.oneOf(["info", "success", "warning", "error"]).isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Banner;
