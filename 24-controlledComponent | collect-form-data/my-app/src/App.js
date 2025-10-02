import FORM from './FORM/FORM';

const App = () => {
  return (
    <div>
      <FORM />
    </div>
  );
};

export default App;

// 👉 In short:
// const [name, setName] = useState('');
// - `name` = the state variable (created by useState, holds the current value).
// - `setName` = the function that updates the state variable's value.
// - `useState` = the React Hook that creates a state variable with an initial value
//    and returns an array [currentValue(state variable name), updateFunction(setName function)]

/*
1. useState

const [name, setName] = useState('');
• This creates a state variable called `name`.
• Initially, `name = ''` (empty string).

2. value={name}

<input value={name} ... />
• This tells React:
  “Whatever the current value of `name` state is → show it inside the input box.”
• If `name` changes, the input re-renders with the new value.

3. onChange updates state

const handleNameChange = (event) => {
  setName(event.target.value);
};
• When the user types, onChange fires.
• setName(...) updates the state.
• React re-renders the component → and because of value={name}, the input shows the updated value.
*/

/*
const [name, setName] = useState('');

• Here, `name` is the state variable (the current value stored in React state).
• `setName` is the function that updates it.

So when you write:
<input value={name} ... />
• value={name} means → “use whatever is inside the state variable `name`.”
• If you type something, setName(event.target.value) updates the state variable
  → React re-renders → value={name} now reflects the updated state.
*/
