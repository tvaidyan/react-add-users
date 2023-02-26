import React, { useState } from 'react';

import NewUser from './components/NewUser/NewUser';
import Users from './components/Users/Users';

const DUMMY_USERS = [
  {
    id: 'e1',
    username: 'Batman',
    age: 45,
  },
  { id: 'e2', username: 'Superman', age: 50 },
];

const App = () => {
  const [users, setUsers] = useState(DUMMY_USERS);
  const addUserHandler = (user) => {
    setUsers((prevUsers) => [user, ...prevUsers]);
  };

  return (
    <div>
      <NewUser onAddUser={addUserHandler} />
      <Users users={users} />
    </div>
  );
};

export default App;
