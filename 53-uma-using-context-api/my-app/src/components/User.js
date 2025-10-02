import useUsersContext from '../hooks/useUsersContext';

const User = ({ user }) => {
  const { users, setUsers } = useUsersContext();

  const handleDelete = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };

  return (
    <article className="user">
      <h2>{user.id}</h2>
      <p>{user.username}</p>
      <button
        onClick={() => {
          handleDelete(user.id);
        }}
      >
        Delete
      </button>
    </article>
  );
};

export default User;
