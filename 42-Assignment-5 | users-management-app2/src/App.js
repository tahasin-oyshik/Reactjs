import { useEffect, useState } from 'react';
import Search from './components/Search';
import Users from './components/Users';
import useFetch from './hook/useFetch';

const App = () => {
  // Task 2: use custom hook
  // - get data, error, isLoading states from custom hook here
  // - use url: 'https://jsonplaceholder.typicode.com/users'
  const { isLoading, error, data } = useFetch('https://jsonplaceholder.typicode.com/users');

  // Task 3: delete user
  // - get the id from User.js
  const [usersCopy, setUsersCopy] = useState([]);

  useEffect(() => {
    setUsersCopy(data);
  }, [data]);

  const handleDeleteUser = (id) => {
    const filter = usersCopy.filter((user) => user.id !== id);
    setUsersCopy(filter);
  };

  // Task 4: search user
  // - get the text from Search.js
  const handleSearch = (searchText) => {
    const text = searchText.toLowerCase();
    const newUsers = data.filter((user) => {
      const userName = user.name.toLowerCase();
      return userName.startsWith(text);
    });
    setUsersCopy(newUsers);
  };

  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {isLoading && <p>Loading users...</p>}
      {error && <p>{error}</p>}

      {/* Needs to pass functions from here for state lifting  */}
      <Search onHandleSearch={handleSearch} />
      {usersCopy.length > 0 && <Users users={usersCopy} onHandleDeleteUser={handleDeleteUser} />}
    </div>
  );
};

export default App;
