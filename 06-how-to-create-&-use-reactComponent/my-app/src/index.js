// import React from 'react';   
// import ReactDOM from 'react-dom/client';

// // A component is a reusable, self-contained piece of code that represents part of a user interface (UI).
// // - Reusable: Use same code in many places
// // - Clean: Keeps logic, UI, and styles separate
// // - Easy to maintain and test
// // - Build complex UI from small parts 

// // Here Card functional component 
// // Always starts with Capital letter
 
// const todoTitle = "Call Familty";
// const todoDesc = "kkdsfl sflsjf sjlfjs e9wjej lsdjfj boby approved";
// const date = new Date();
// const dateName = date.getDate();
// const monthName = date.getMonth()+1;
// const currentYear = date.getFullYear(); 

// const Card = () => {
//   return (
//     <div className="card">
//       <h3 className="cardTitle">{todoTitle}</h3>   
//       <p className="cardDesc">{todoDesc}</p> 
//       <p className="cardFooter">{`${dateName}/${monthName}/${currentYear}`}</p> 
//     </div>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <div>
//     <h1 className="headingStyle">Todo App</h1>  
//     <Card />    
//   </div>  
// );     


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import Card from './components/Card.js';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <div>
//     <h1 className="headingStyle">Todo App</h1>  
//     <Card />    
//     <Card />    
//     <Card />    
//   </div>  
// );     


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);     