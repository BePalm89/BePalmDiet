import "./Input.css";

const Input = ({
  label,
  id,
  required = false,
  placeholder,
  value,
  fnc,
  type,
  icon,
  fcnIcon,
  error,
}) => {
  const handleFileChange = (e) => {
    const fileName = e.target.files[0]?.name || "No file chosen";
    document.getElementById("file-chosen").textContent = fileName;
  };

  return (
    <div className="form-item">
      {label && (
        <label htmlFor={id}>
          {label} {required ? " *" : ""}
        </label>
      )}
      {type === "text" ? (
        <div className="form-input">
          <input
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={fnc}
            className={error ? "input-error" : ""}
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
            <span id="file-chosen">No file chosen</span>
          </div>
        </>
      )}
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default Input;
