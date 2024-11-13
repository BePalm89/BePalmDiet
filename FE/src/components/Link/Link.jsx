import "./Link.css";

import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";

const Link = ({ label, url, style = "primary-link" }) => {
  const linkClass = `link ${style}`;
  return (
    <RouterLink to={url} className={linkClass}>
      {label} <img src="/icons/arrow.png" alt="arrow" id="arrow" />
    </RouterLink>
  );
};

Link.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  style: PropTypes.string,
};

export default Link;
