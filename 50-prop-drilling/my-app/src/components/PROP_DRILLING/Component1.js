import { useState } from 'react';
import Component2 from './Component2';

const Component1 = () => {
  const [user, setUser] = useState({ id: 372, name: 'Md Tahasin Oyshik' });

  return (
    <div>
      <Component2 user={user} />
    </div>
  );
};

export default Component1;
