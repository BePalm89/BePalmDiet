import "./TextArea.css";

const TextArea = ({ label, id, required, placeholder, fnc, error }) => {
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
        onChange={fnc}
        id={id}
        className={error ? "input-error" : ""}
      ></textarea>
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default TextArea;
