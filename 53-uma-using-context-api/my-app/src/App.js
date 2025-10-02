import NewUser from './components/NewUser';
import Users from './components/Users';
import UsersProvider from './context/UsersContext';

const App = () => {
  return (
    <UsersProvider>
      <div>
        <NewUser />
        <Users />
      </div>
    </UsersProvider>
  );
};

export default App;

// RDC - read, delete, create user
// useContext() hook
// createContext()

// App -> Users -> User
// App -> NewUser

// How To Use context Api
// - first create context
// - provide the context
// - use the context
