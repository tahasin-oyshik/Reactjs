import { useLocation, useParams } from 'react-router-dom';

const Blog = () => {
  const { title } = useParams();
  const location = useLocation();

  // const [bodyData, setBodyData] = useState('');

  // useEffect(() => {
  //   const blogData = blogsData.filter((blog) => blog.title == title);
  //   setBodyData(blogData[0].body);
  // }, []);

  return (
    <div>
      <h1>{title} Page</h1>
      <p>{location.state.body.slice(0, 500)}</p>
      <p>{location.state.body.slice(501, 800)}</p>
    </div>
  );
};

export default Blog;
