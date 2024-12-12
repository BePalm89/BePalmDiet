import "./Modal.css";
import PropTypes from "prop-types";

const Modal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{data.name}</h2>
          <div className="close-btn-container" onClick={onClose}>
            <img src="/icons/close.png" alt="Close" />
          </div>
        </div>
        <div className="modal-body">
          <p>{data.description}</p>
          <ul>
            {data.howTo.map((step, index) => (
              <li key={step}>
                <span>{`${index + 1}.`}</span> <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  data: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    howTo: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default Modal;
