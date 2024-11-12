import "./TextArea.css";

const TextArea = ({
  label,
  id,
  required,
  placeholder,
  onChange,
  error,
  value,
}) => {
  return (
    <div className="form-item">
      {label && (
        <label htmlFor={id}>
          {label} {required ? " *" : ""}
        </label>
      )}
      <textarea
        htmlFor={id}
        placeholder={placeholder}
        onChange={onChange}
        id={id}
        className={error ? "input-error" : ""}
        value={value}
      ></textarea>
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default TextArea;
