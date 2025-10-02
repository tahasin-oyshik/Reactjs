import FORM from './FORM/FORM';

const App = () => {
  return (
    <div>
      <FORM />
    </div>
  );
};

export default App;

// const [user, setUser] = useState({ name: '', email: '', password: '' });

// 👉 In short:
// - `user` = the state variable (object) that holds the current form data
//            → { name: '', email: '', password: '' } initially.
// - `setUser` = the function that updates the `user` state object.
// - `useState` = the React Hook that creates this state and returns
//                an array [currentState, updateFunction].

/*
When you write:
setUser({ ...user, [event.target.name]: event.target.value });

- ...user copies all the existing key/value pairs into the new object.
- Then [event.target.name]: event.target.value updates just one property.

Example:
Current state:
user = { name: "", email: "", password: "" }

You type "abc@test.com" in the email field.
New state:
user = { name: "", email: "abc@test.com", password: "" }

👉 So ...user ensures nothing else gets lost when updating just one field.

In short:
- ...user = keep the old values.
- [event.target.name]: event.target.value = override just the changed field.
*/
