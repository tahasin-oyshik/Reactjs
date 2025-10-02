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
    <h1 className="headingStyle">Todo App</h1>  
    <div className="card">
      <h3 className="cardTitle">{todoTitle}</h3>   
      <p className="cardDesc">{todoDesc}</p> 
      <p className="cardFooter">{`${dateName}/${monthName}/${currentYear}`}</p> 
    </div>
  </div>  
);     