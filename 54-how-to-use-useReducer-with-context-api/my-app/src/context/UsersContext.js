import { createContext, useReducer } from 'react';
import { initialState, reducer } from '../reducer/usersReducer';

// creating context
export const UsersContext = createContext({});

// providing the context
const UsersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <UsersContext.Provider value={{ state, dispatch }}>{children}</UsersContext.Provider>;
};

export default UsersProvider;
