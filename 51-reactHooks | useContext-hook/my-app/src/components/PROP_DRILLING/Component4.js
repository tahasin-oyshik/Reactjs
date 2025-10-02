import { useContext } from 'react';
import { UserContext } from './UserContext';

const Component4 = () => {
  const { user, text } = useContext(UserContext);

  return (
    <div>
      <h3>{text}</h3>
      <p>{user.id}</p>
      <p>{user.name}</p>
    </div>
  );
};

export default Component4;
