import React, { useState } from 'react';

import UserForm from './UserForm';
import './NewUser.css';

const NewUser = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveUserHandler = (enteredUser) => {
    const user = {
      ...enteredUser,
      id: Math.random().toString(),
    };
    props.onAddUser(user);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-user">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New User</button>
      )}
      {isEditing && (
        <UserForm onSaveUser={saveUserHandler} onCancel={stopEditingHandler} />
      )}
    </div>
  );
};

export default NewUser;
