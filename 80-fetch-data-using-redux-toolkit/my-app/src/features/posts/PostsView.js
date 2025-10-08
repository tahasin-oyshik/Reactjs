import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './postSlice';

const PostsView = () => {
  const { isLoading, posts, error } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      {isLoading && <h3>Loading ...</h3>}
      {error && <h3>{error.message}</h3>}
      <section>
        {posts &&
          posts.map((post) => {
            const { id, title, body } = post;
            return (
              <article key={id}>
                <h5>{title}</h5>
                <p>{body}</p>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default PostsView;
