import React, { useState } from 'react';
import './AlertModal.css';

const AlertModal = ({ handleClose, show, title, text, closeButtonText }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="alert-title">{title}</div>
        <div className="alert-text">{text}</div>
        <button className="alert-button" type="button" onClick={handleClose}>
          {closeButtonText}
        </button>
      </section>
    </div>
  );
};

export default AlertModal;
