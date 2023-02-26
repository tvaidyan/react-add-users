import React, { useState } from 'react';
import Card from '../UI/Card';
import UsersList from './UsersList';
import './Users.css';

const Users = (props) => {
  return (
    <div>
      <Card className="users">
        <UsersList items={props.users} />
      </Card>
    </div>
  );
};

export default Users;
