import Child from './components/STATE_LIFTING/Child';

const App = () => {
  const parentMessage = 'Hello from Parent';

  const handleChildMessage = (message) => {
    console.log(message);
  };

  return (
    <div>
      <Child message={parentMessage} onMessageSend={handleChildMessage} />
    </div>
  );
};

export default App;
