import useUsersContext from '../hooks/useUsersContext';
import User from './User';

const Users = () => {
  const { state } = useUsersContext();
  return (
    <section className="users">
      {state.users.map((user) => {
        const { id } = user;
        return <User key={id} user={user} />;
      })}
    </section>
  );
};

export default Users;
