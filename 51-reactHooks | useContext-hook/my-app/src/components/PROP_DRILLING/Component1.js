// global state (accessing Component1's user object from Component4 without prop drilling through Component2,3)
// Component1 -> Component2 -> Component3 -> Component4

import { useState } from 'react';
import Component2 from './Component2';
import { UserContext } from './UserContext';

const Component1 = () => {
  const [user, setUser] = useState({ id: 372, name: 'Md Tahasin Oyshik' });
  const [text, setText] = useState('hello I am text');

  return (
    <UserContext.Provider value={{ user, text }}>
      <Component2 />
    </UserContext.Provider>
  );
};

export default Component1;
