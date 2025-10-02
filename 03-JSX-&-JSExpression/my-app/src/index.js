import React from 'react';
import ReactDOM from 'react-dom/client';

// 1. JSX is a syntax extension for JavaScript used in React to write HTML-like code inside JavaScript. It makes UI code easier to write and read.
// 2. JSX lets us write HTML inside JavaScript easily
// 3. It also allows using JavaScript expressions inside HTML using {}
// 4. It's simpler and cleaner to build UI with it in React
// 5. <>...</> called React Fragment

// document.getElementById('root') -> Selected the div from HTML.
// ReactDOM.createRoot(...) -> Tells React to take control of that div.
// root.render(<h1>Todo App</h1>) -> This tells React: "Render (display) this <h1> element inside that root div."   

const todoTitle = "Call Familty";
const todoDesc = "kkdsfl sflsjf sjlfjs e9wjej lsdjfj boby approved";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth()+1;
const currentYear = date.getFullYear();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1>Todo App</h1>
    <h3>{todoTitle}</h3>   
    <p>{todoDesc}</p> 
    <p>{`${dateName}/${monthName}/${currentYear}`}</p> 
  </div>  
);     