import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// pages
import Navbar from '../layout/Navbar';
import Error from '../pages/ Error';
import About from '../pages/About';
import AddBlog from '../pages/AddBlog';
import Home from '../pages/Home';
import Protected from './Protected';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Navbar />
      {isLoggedIn ? (
        <button
          onClick={() => {
            setIsLoggedIn(!isLoggedIn);
          }}
        >
          Log Out
        </button>
      ) : (
        <button
          onClick={() => {
            setIsLoggedIn(!isLoggedIn);
          }}
        >
          Log In
        </button>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/add-blog"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <AddBlog />
            </Protected>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
