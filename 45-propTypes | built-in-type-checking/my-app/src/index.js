// Skip This Project build in type checking won't work on react 19
// It used to word earlier model

import ReactDOM from 'react-dom/client';
import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
