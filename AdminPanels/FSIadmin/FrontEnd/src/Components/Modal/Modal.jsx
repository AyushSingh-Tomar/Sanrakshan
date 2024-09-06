// ModalComponent.js
import './Modal.css'; // Import the CSS for styling

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
