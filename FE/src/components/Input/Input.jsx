import "./Input.css";

const Input = ({
  label,
  id,
  required = false,
  placeholder,
  value,
  fcn,
  type,
  icon,
  fcnIcon,
}) => {
  return (
    <div className="form-item">
      {required}
      {label && (
        <label htmlFor={id}>
          {label} {required ? " *" : ""}
        </label>
      )}
      <div className="form-input">
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={fcn}
        />
        {icon ? (
          <div className="icon-container" onClick={fcnIcon}>
            <img src={icon.img} alt={icon.value} />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Input;
