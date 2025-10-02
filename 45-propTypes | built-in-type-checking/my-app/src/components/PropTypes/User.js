import PropTypes from 'prop-types';

const User = ({ user }) => {
  console.log(user);
  return (
    <div>
      <h3>{user.id}</h3>
      <h3>{user.name}</h3>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
};

export default User;

// First Example
// import PropTypes from 'prop-types';

// const User = ({ userName, userId }) => {
//   return (
//     <div>
//       <h1>{userName}</h1>
//       <h1>{userId}</h1>
//     </div>
//   );
// };

// User.propTypes = {
//   // key-value
//   userName: PropTypes.string,
//   userId: PropTypes.number,
// };

// User.defaultProps = {
//   userName: 'default name',
//   userId: 0,
// };

// export default User;
