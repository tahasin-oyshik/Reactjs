// For Icon Go -> https://react-icons.github.io/react-icons/search/#q=facebook
// Importing Facebook and YouTube icons from react-icons (Font Awesome library)
import { FaFacebook, FaYoutube } from 'react-icons/fa';

const App = () => {
  return (
    <div>
      <h1>Welcome to React</h1>
      <span>
        <FaFacebook className="icon" />
      </span>
      <span>
        <FaYoutube className="icon" />
      </span>
    </div>
  );
};

export default App;
