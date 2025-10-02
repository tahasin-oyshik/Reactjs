import { useState } from 'react';
import Message from './components/Message';

const App = () => {
  const [count, setCount] = useState(0);
  console.log('app rendering');
  return (
    <div>
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increment
      </button>
      {/* <Message numberOfMessages={0} /> */}
      <Message numberOfMessages={count} />
    </div>
  );
};

export default App;
