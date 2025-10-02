import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Blog from './pages/Blog';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Home from './pages/Home';
import User from './pages/User';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        {/* dynamic routing */}
        <Route path="/blogs/:title" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
        {/* use of routeParameter */}
        <Route path="/user/:userid" element={<User />} />
        {/* use of queryParameter */}
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
};

// /home -> <Home />
// /contact -> <Contact />

export default App;
