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
      {label}
    </button>
  );
};

export default Button;
