import UseEffectExample from './components/HOOKS/useEffect/UseEffectExample';

const App = () => {
  return (
    <div>
      <UseEffectExample />
    </div>
  );
};

export default App;

/*
// calls with every render (because we didn't add dependency)

  useEffect(() => {
    console.log('useEffect');
  });

// calls with only first render

  useEffect(() => {
    console.log('useEffect');
  }, []);

// calls with first render and depened on count

  useEffect(() => {
    console.log('useEffect');
  }, [count]);

*/
