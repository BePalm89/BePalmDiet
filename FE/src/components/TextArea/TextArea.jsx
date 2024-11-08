import "./TextArea.css";

const TextArea = ({ label, id, required, placeholder, fnc }) => {
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
      ></textarea>
    </div>
  );
};

export default TextArea;
