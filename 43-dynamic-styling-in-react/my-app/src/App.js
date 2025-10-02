import { useEffect, useState } from 'react';
import './app.css';

const App = () => {
  const [name, setName] = useState('');
  const [validInput, setValidInput] = useState(false);

  useEffect(() => {
    setValidInput(name.length < 2 ? false : true);
  }, [name]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
        // className={`${validInput ? 'valid' : 'invalid'}`}
        className={`${validInput && 'valid'}`}
      />
    </div>
  );
};

export default App;

// // Second Example
// import { useEffect, useState } from 'react';
// import './app.css';

// const App = () => {
//   const [name, setName] = useState('');
//   const [validInput, setValidInput] = useState(false);

//   useEffect(() => {
//     setValidInput(name.length < 2 ? false : true);
//   }, [name]);

//   const handleChange = (e) => {
//     setName(e.target.value);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter your name"
//         value={name}
//         onChange={handleChange}
//         style={{ backgroundColor: validInput ? 'green' : 'red' }}
//       />
//     </div>
//   );
// };

// export default App;

// // First Example
// const App = () => {
//   const error = true;

//   return (
//     <div>
//       <h2 style={{ color: error ? 'red' : 'green', backgroundColor: error ? 'black' : 'yellow' }}>
//         Good Evening
//       </h2>
//     </div>
//   );
// };

// export default App;
