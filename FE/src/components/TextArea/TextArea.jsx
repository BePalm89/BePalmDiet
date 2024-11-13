import "./TextArea.css";

import PropTypes from "prop-types";

const TextArea = ({
  label,
  id,
  required,
  placeholder,
  error,
  value,
  onChange,
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

TextArea.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default TextArea;
