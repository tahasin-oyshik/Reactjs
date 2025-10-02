// First render → App and Message both render.
// Toggle changes →
//  - App re-renders
//  - useCallback keeps same function (since count not changed)
//  - Message props didn’t change → memo skips re-render
// Count changes →
//  - App re-renders
//  - useCallback creates new function (dependency = count)
//  - Message gets new props (count + function) → memo re-renders

import { useCallback, useState } from 'react';
import Message from './components/Message';

const App = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);
  console.log('app rendering');

  const handleIncrementMessage = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      {toggle ? 'on' : 'off'}
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>

      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increment
      </button>
      <Message numberOfMessages={count} onHandleIncrement={handleIncrementMessage} />
    </div>
  );
};

export default App;
