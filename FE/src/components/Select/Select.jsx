import { useState } from "react";
import "./Select.css";

const Select = ({
  label,
  options,
  required,
  id,
  onChange,
  placeholder,
  value,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the dropdown panel
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const selectedOption = options.find((option) => option.value === value);

  return (
    <div className="form-item">
      {label && (
        <label htmlFor={id}>
          {label} {required ? " *" : ""}
        </label>
      )}
      <div>
        <div className="custom-select" onClick={toggleDropdown}>
          {!selectedOption && (
            <span className="select-placeholder">{placeholder}</span>
          )}
          <div className="custom-selected-value">
            {selectedOption?.icon && (
              <span className="option-icon-container">
                <img src={selectedOption?.icon} alt={selectedOption?.value} />
              </span>
            )}
            <span>{selectedOption?.label}</span>
          </div>
          <span>
            <img src="/icons/arrow-down.png" alt="arrow down" />
          </span>
        </div>
        {isOpen && (
          <ul className="custom-select-panel">
            {options.map((option) => (
              <li
                key={option.value}
                className="custom-select-option"
                onClick={() => handleSelect(option)}
              >
                {option.icon && (
                  <span className="option-icon-container">
                    <img src={option.icon} alt={option.value} />
                  </span>
                )}
                <span>{option.label}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Select;