import "./Button.css";
const Button = ({
  label,
  onClick,
  type = "button",
  disabled,
  icon,
  variant = "primary",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn ${variant} ${disabled ? "disabled" : ""}`}
    >
      {icon && <img src={icon.url} alt={icon.name}></img>} {label}
    </button>
  );
};

export default Button;
