import "./Input.css";

import { useEffect, useState } from "react";
import PropTypes from "prop-types";
const Input = ({
  label,
  id,
  required = false,
  placeholder,
  value,
  type,
  icon,
  error,
  name,
  fcnIcon,
  onFileChange,
  onChange,
}) => {
  const [fileName, setFileName] = useState("No file chosen");

  useEffect(() => {
    if (type === "file" && value) {
      setFileName(value);
    }
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onFileChange(file);
      setFileName(file.name);
    }
  };

  return (
    <div className="form-item">
      {label && (
        <label htmlFor={id}>
          {label} {required ? " *" : ""}
        </label>
      )}
      {type !== "file" ? (
        <div className="form-input">
          <input
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={error ? "input-error" : ""}
            name={name}
          />
          {icon ? (
            <div className="icon-container" onClick={fcnIcon}>
              <img src={icon.img} alt={icon.value} />
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <>
          <input
            type="file"
            style={{ display: "none" }}
            id={id}
            onChange={handleFileChange}
          />
          <div>
            <label className="custom-file" htmlFor={id}>
              Choose file
            </label>
            <span id="file-chosen">{fileName}</span>
          </div>
        </>
      )}
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.string.isRequired,
  icon: PropTypes.shape({
    img: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }),
  error: PropTypes.string,
  name: PropTypes.string,
  fcnIcon: PropTypes.func,
  onFileChange: PropTypes.func,
  onChange: PropTypes.func,
};

export default Input;
