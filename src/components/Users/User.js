import Card from '../UI/Card';
import React from 'react';
import './User.css';

const User = (props) => {
  return (
    <li>
      <Card className="user">
        <div className="user__description">
          <h2>
            {props.username} ({props.age} years old)
          </h2>
        </div>
      </Card>
    </li>
  );
};

export default User;
