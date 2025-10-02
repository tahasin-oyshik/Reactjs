const App = () => {
  const handleParentClick = (event) => {
    console.log('Parent Event: ', event);
  };

  const handleChildClick = (event) => {
    event.stopPropagation();
    console.log('Child Event: ', event);
  };

  return (
    <div className="parent" onClick={handleParentClick}>
      <h1>welcome everyone</h1>
      <button onClick={handleChildClick}>+</button>
    </div>
  );
};

export default App;
