// const todos = [
//   {
//     title: "todo1",
//     desc: "todo1 description",
//   },
//   {
//     title: "todo2",
//     desc: "todo2 description",
//   },
//   {
//     title: "todo3",
//     desc: "todo3 description",
//   },
// ];

// // If u use {} after => than u have to use return.
// // you need to use curly braces and a return statement if you're doing
// // destructuring or any other JS logic inside .map()
// const List = () => {
//   return (
//     <div>
//       {todos.map((todo, index) => {
//         return (
//           <div key={index}>
//             <h3>{todo.title}</h3>
//             <p>{todo.desc}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default List;

// // *** If u use () than don't need to use return.
// const List = () => {
//   return (
//     <div>
//       {todos.map((todo, index) => (
//         <div key={index}>
//           <h3>{todo.title}</h3>
//           <p>{todo.desc}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default List;



// // For unique id -> https://www.npmjs.com/package/uuid
// import { v4 as uuidv4 } from 'uuid';

// const todos = [
//   {
//     title: "todo1",
//     desc: "todo1 description",
//   },
//   {
//     title: "todo2",
//     desc: "todo2 description",
//   },
//   {
//     title: "todo3",
//     desc: "todo3 description",
//   },
// ];

// const List = () => {
//   console.log(uuidv4());
//   return (
//     <div>
//       {todos.map((todo) => (
//         <div key={uuidv4()}>
//           <h3>{todo.title}</h3>
//           <p>{todo.desc}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default List;



import { v4 as uuidv4 } from 'uuid';

const todos = [
  {
    id: uuidv4(),
    title: "todo1",
    desc: "todo1 description",
  },
  {
    id: uuidv4(),
    title: "todo2",
    desc: "todo2 description",
  },
  {
    id: uuidv4(),
    title: "todo3",
    desc: "todo3 description",
  },
];

// const List = () => {
//   return (
//     <div>
//       {todos.map((todo) => (
//         <div key={todo.id}>
//           <h3>{todo.title}</h3>
//           <p>{todo.desc}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default List;

const List = () => {
  return (
    <div>
      {todos.map((todo) => {
        const {id, title, desc} = todo;
        return (
          <div key={id}>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default List;
