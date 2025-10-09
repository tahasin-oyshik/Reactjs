import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from './booksSlice';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { id: uuidv4(), title, author };
    dispatch(addBook(book));
    navigate('/show-books', { replace: true });
  };

  return (
    <div>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            placeholder="Enter the books title ..."
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="author">Author: </label>
          <input
            type="text"
            id="author"
            name="author"
            value={author}
            placeholder="Enter the author name ..."
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
            required
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;

// CRUD -> CREATE, READ
