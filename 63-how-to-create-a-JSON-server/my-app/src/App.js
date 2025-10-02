// For creating JSON server first intall -> npm install -g json-server
// Then -> npx json-server -p 3001 -w database/db.json
// After that you get a url for db.json, then you can get or show data in App.js

import axios from 'axios';
import { useEffect, useState } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    const response = await axios.get('http://localhost:3001/users');
    setUsers(response.data);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <section>
      {users.map((user) => {
        const { id, name, email } = user;
        return (
          <article key={id}>
            <h2>{name}</h2>
            <p>{email}</p>
          </article>
        );
      })}
    </section>
  );
};

export default App;
