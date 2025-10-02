// // For routeParameter value access
// import { useParams } from 'react-router-dom';

// const User = () => {
//   const { userid } = useParams();
//   return (
//     <div>
//       <h1>{userid}</h1>
//     </div>
//   );
// };

// export default User;

// // For queryParameter value access
// import { useSearchParams } from 'react-router-dom';

// const User = () => {
//   const [searchParams, setSearchParams] = useSearchParams();

//   return (
//     <div>
//       <h1>{searchParams.get('id')}</h1>
//       <h1>{searchParams.get('age')}</h1>
//       <h1>{searchParams.get('name')}</h1>
//     </div>
//   );
// };

// export default User;

// // how to set query
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const User = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ name: name, age: age });
  };

  return (
    <div>
      <h1>User</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          value={age}
          placeholder="Enter your age"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <button type="submit">Find user</button>
      </form>
      {/* <h1>{searchParams.get('id')}</h1>
      <h1>{searchParams.get('age')}</h1>
      <h1>{searchParams.get('name')}</h1> */}
    </div>
  );
};

export default User;
