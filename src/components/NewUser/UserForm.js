import React, { useState } from 'react';
import AlertModal from '../UI/AlertModal';
import './UserForm.css';

const UserForm = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [modalText, setModalText] = useState('');
  const [modalVisibility, setModalVisibility] = useState(false);

  const showModal = (modalTitle, modalText) => {
    setModalTitle(modalTitle);
    setModalText(modalText);
    setModalVisibility(true);
  };

  const hideModal = () => {
    setModalVisibility(false);
    setModalTitle('');
    setModalText('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!enteredUsername || !enteredAge) {
      showModal(
        'Invalid Input',
        'Please enter a valid name and age (non-empty values).'
      );
      return;
    } else {
      // TODO: This has to be wired up to the modal's OK button or background click handler
      hideModal();
    }

    const user = {
      username: enteredUsername,
      age: enteredAge,
    };

    props.onSaveUser(user);
    setEnteredUsername('');
    setEnteredAge('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-user__controls">
        <div className="new-user__control">
          <label>Username</label>
          <input
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
        </div>
        <div className="new-user__control">
          <label>Age</label>
          <input
            type="number"
            min="0"
            step="1"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
        </div>
      </div>
      <div className="new-user__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add User</button>
      </div>
      <AlertModal
        show={modalVisibility}
        title={modalTitle}
        text={modalText}
        closeButtonText="Okay"
        handleClose={hideModal}
      />
    </form>
  );
};

export default UserForm;
