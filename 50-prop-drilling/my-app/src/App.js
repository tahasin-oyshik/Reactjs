// App(parent) -> App's child is Component1 -> Component1's child is Component2
// If we want to send data Component1 to Component4 we have to go through Component2,3
// And this is called prop drilling and we don't want this.
import Component1 from './components/PROP_DRILLING/Component1';

const App = () => {
  return (
    <div>
      <Component1 />
    </div>
  );
};

export default App;
