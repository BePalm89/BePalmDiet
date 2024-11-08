import "./Link.css";
import { Link as RouterLink } from "react-router-dom";

const Link = ({ label, url, style = "primary-link" }) => {
  const linkClass = `link ${style}`;
  return (
    <RouterLink to={url} className={linkClass}>
      {label} <img src="/icons/arrow.png" alt="arrow" id="arrow" />
    </RouterLink>
  );
};

export default Link;
