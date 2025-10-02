/*
React assignment - 2 : Counter App
Total points = 5

Purpose of this assignment : Testing students skills on
- useState() hook
- Event Handler
- conditional rendering

Assignment steps:
- part 1: make sure that increment, decrement and reset functionality works (3 points)
- part 2: disable buttons (2 points)
    ○ disable increment button when count value is 5
    ○ disable decrement button when count value is -5
*/

import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
