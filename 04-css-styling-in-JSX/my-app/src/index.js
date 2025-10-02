// import React from 'react';
// import ReactDOM from 'react-dom/client';
 
// const todoTitle = "Call Familty";
// const todoDesc = "kkdsfl sflsjf sjlfjs e9wjej lsdjfj boby approved";
// const date = new Date();
// const dateName = date.getDate();
// const monthName = date.getMonth()+1;
// const currentYear = date.getFullYear(); 

// const headingStyle = {
//   backgroundColor: 'purple',
//   color: 'white', 
//   textAlign: 'center',
//   padding: '15px',  
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <div>
//     <h1 style={headingStyle}>Todo App</h1>  
//     <h3>{todoTitle}</h3>   
//     <p>{todoDesc}</p> 
//     <p>{`${dateName}/${monthName}/${currentYear}`}</p> 
//   </div> 
// );     


import React from 'react';
import ReactDOM from 'react-dom/client';
 
const todoTitle = "Call Familty";
const todoDesc = "kkdsfl sflsjf sjlfjs e9wjej lsdjfj boby approved";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth()+1;
const currentYear = date.getFullYear(); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1 className="headingStyle largeText">Todo App</h1>  
    <h3>{todoTitle}</h3>   
    <p>{todoDesc}</p> 
    <p>{`${dateName}/${monthName}/${currentYear}`}</p> 
  </div> 
);     


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import'./index.css';
 
// const todoTitle = "Call Familty";
// const todoDesc = "kkdsfl sflsjf sjlfjs e9wjej lsdjfj boby approved";
// const date = new Date();
// const dateName = date.getDate();
// const monthName = date.getMonth()+1;
// const currentYear = date.getFullYear(); 

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <div>
//     <h1 className="headingStyle">Todo App</h1>  
//     <h3>{todoTitle}</h3>   
//     <p>{todoDesc}</p> 
//     <p>{`${dateName}/${monthName}/${currentYear}`}</p> 
//   </div> 
// );     