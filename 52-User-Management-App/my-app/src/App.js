import { useState } from 'react';
import NewUser from './components/NewUser';
import Users from './components/Users';

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, username: 'Jones' },
    { id: 2, username: 'Anya' },
  ]);

  const handleDeleteUser = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };
  const handleAddNewUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  return (
    <div>
      <NewUser handleAddNewUser={handleAddNewUser} />
      <Users users={users} handleDeleteUser={handleDeleteUser} />
    </div>
  );
};

export default App;

// RDC - read, delete, create user
// useContext() hook
// createContext()

// App -> Users -> User
// App -> NewUser
