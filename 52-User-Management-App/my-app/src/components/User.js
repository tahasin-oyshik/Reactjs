const User = ({ user, handleDeleteUser }) => {
  const handleDelete = (id) => {
    handleDeleteUser(id);
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
