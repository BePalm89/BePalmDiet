import "./Button.css";

import PropTypes from "prop-types";

const Button = ({
  label,
  type = "button",
  disabled,
  icon,
  variant = "primary",
  onClick,
  isLoading,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn ${variant} ${disabled ? "disabled" : ""}`}
    >
      {icon && <img src={icon.url} alt={icon.name}></img>}
      {isLoading && <div className="spinner-loading"></div>}
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  }),
  variant: PropTypes.string,
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default Button;
