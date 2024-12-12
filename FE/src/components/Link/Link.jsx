import "./Link.css";

import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";

const Link = ({ label, url, action, style = "primary-link" }) => {
  const linkClass = `link ${style}`;
  return (
    <RouterLink to={url} className={linkClass} onClick={action}>
      {label}{" "}
      <img
        src={
          style === "primary-link"
            ? "/icons/arrow.png"
            : "/icons/arrow-accent.png"
        }
        alt="arrow"
        id="arrow"
      />
    </RouterLink>
  );
};

Link.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  style: PropTypes.string,
  action: PropTypes.func,
};

export default Link;
