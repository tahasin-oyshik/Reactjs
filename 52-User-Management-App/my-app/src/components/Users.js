import User from './User';

const Users = ({ users, handleDeleteUser }) => {
  return (
    <section className="users">
      {users.map((user) => {
        const { id, username } = user;
        return <User key={id} user={user} handleDeleteUser={handleDeleteUser} />;
      })}
    </section>
  );
};

export default Users;
