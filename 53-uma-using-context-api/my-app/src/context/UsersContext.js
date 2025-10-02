import { createContext, useState } from 'react';

// creating context
export const UsersContext = createContext({});

// providing the context
const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { id: 1, username: 'Jones' },
    { id: 2, username: 'Anya' },
  ]);

  /* {children} means any child component wrapped inside <UsersProvider> ... </UsersProvider> will have access to this context */
  return <UsersContext.Provider value={{ users, setUsers }}>{children}</UsersContext.Provider>;
};

export default UsersProvider;
