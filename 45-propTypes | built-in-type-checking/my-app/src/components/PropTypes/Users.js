import { useState } from 'react';
import User from './User';

const Users = () => {
  const [user, setUser] = useState({
    id: 2024200000372,
    name: 'Md Tahasin Oyshik',
  });

  return (
    <div>
      <User user={user} />
    </div>
  );
};

export default Users;

// First Example
// import { useState } from 'react';
// import User from './User';

// const Users = () => {
//   const [userName, setUserName] = useState('Md Tahasin Oyshik');
//   const [userId, setUserId] = useState('2024200000372');

//   return (
//     <div>
//       <User userName={userName} userId={userId} />
//     </div>
//   );
// };

// export default Users;
