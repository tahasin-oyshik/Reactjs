// // name, email, password
// // For using formik go terminal -> npm install formik

import { useFormik } from 'formik';

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: '' });
    },
  });

  return (
    <div>
      <h2>User signup</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            placeholder="Enter your name"
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            placeholder="Enter your email"
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formik.values.password}
            placeholder="Enter your password"
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <button type="submit">signup</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;

// // You Already Know This Methods
// import { useState } from 'react';

// const Signup = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };
//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };
//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newUser = {
//       Name: name,
//       Email: email,
//       Password: password,
//     };
//     console.log(newUser);
//   };

//   return (
//     <div>
//       <h2>User signup</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name: </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={name}
//             placeholder="Enter your name"
//             onChange={handleNameChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email: </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={email}
//             placeholder="Enter your email"
//             onChange={handleEmailChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password: </label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={password}
//             placeholder="Enter your password"
//             onChange={handlePasswordChange}
//           />
//         </div>
//         <div>
//           <button type="submit">signup</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Signup;
