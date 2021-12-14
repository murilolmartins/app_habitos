import { useState, useEffect } from "react";
import ReactModal from "react-modal";

const Modal = ({ children, isOpen, setIsOpen }) => {
  const [modalStatus, setModalStatus] = useState(false);
  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);
  return (
    <ReactModal
      isOpen={!!modalStatus}
      contentLabel="onRequestClose Example"
      onRequestClose={setModalStatus}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          background: "#fff",
          color: "#333",
          borderRadius: "8px",
          width: "320px",
          padding: "10px",
          height: "380px",
        },
        overlay: {
          background: "rgba(51, -51, -51, 0.5)",
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
