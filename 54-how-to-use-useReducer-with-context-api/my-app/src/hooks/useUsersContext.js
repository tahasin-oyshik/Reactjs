import { useContext } from 'react';
import { UsersContext } from '../context/UsersContext';

// using the context by useContext hook
const useUsersContext = () => {
  return useContext(UsersContext);
};

export default useUsersContext;
