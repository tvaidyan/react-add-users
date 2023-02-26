import React from 'react';
import User from './User';
import './UsersList.css';

const UsersList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="users-list__fallback">Found no users.</h2>;
  }

  return (
    <ul className="users-list">
      {props.items.map((user) => (
        <User key={user.id} username={user.username} age={user.age} />
      ))}
    </ul>
  );
};

export default UsersList;
