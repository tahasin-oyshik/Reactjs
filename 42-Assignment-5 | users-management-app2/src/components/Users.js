import PropTypes from 'prop-types';

import User from './User';

const Users = ({ users, onHandleDeleteUser }) => {
  return (
    <section className="users">
      {users.map((user) => (
        <User key={user.id} {...user} onHandleDeleteUser={onHandleDeleteUser} />
      ))}
    </section>
  );
};

Users.propTypes = {
  users: PropTypes.array,
  onHandleDeleteUser: PropTypes.func
};

export default Users;
