import { useReducer, useState } from 'react';
import booksReducer from './booksReducer';

const BOOKS_DATA = [
  { id: 1, name: 'Pather Panchal' },
  { id: 2, name: 'Padma Nadir Majhi' },
  { id: 3, name: 'Srikanta' },
];
const Modal = ({ modalText }) => {
  return <p>{modalText}</p>;
};

const INITIAL_STATE = {
  books: BOOKS_DATA,
  isModalOpen: false,
  modalText: '',
};
const UseReducer = () => {
  const [state, dispatch] = useReducer(booksReducer, INITIAL_STATE);
  const [bookName, setBookName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { id: new Date().getTime().toString(), name: bookName };
    dispatch({ type: 'ADD', payload: newBook });
    setBookName('');
  };
  const removeBook = (id) => {
    dispatch({ type: 'REMOVE', payload: id });
  };

  return (
    <div>
      <h3>Book List</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={bookName}
          onChange={(e) => {
            setBookName(e.target.value);
          }}
        />
        <button type="submit">Add Book</button>
      </form>

      {state.isModalOpen && <Modal modalText={state.modalText} />}

      {state.books.map((book) => {
        const { id, name } = book;
        return (
          <li key={id}>
            {name}
            <button
              onClick={() => {
                removeBook(id);
              }}
            >
              Remove
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default UseReducer;

/*
// Same thing with useState hook, first one useReducer hook example
import { useState } from 'react';

const booksData = [
  { id: 1, name: 'Pather Panchal' },
  { id: 2, name: 'Padma Nadir Majhi' },
  { id: 3, name: 'Srikanta' },
];
const Modal = ({ modalText }) => {
  return <p>{modalText}</p>;
};

const UseReducer = () => {
  const [books, setBooks] = useState(booksData);
  const [bookName, setBookName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalText, setModalText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setBooks((prevState) => {
      const newBook = { id: new Date().getTime().toString(), name: bookName };
      return [...prevState, newBook];
    });
    setBookName('');
    setIsModalOpen(true);
    setModalText('book is added');
  };

  return (
    <div>
      <h3>Book List</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={bookName}
          onChange={(e) => {
            setBookName(e.target.value);
          }}
        />
        <button type="submit">Add Book</button>
      </form>

      {isModalOpen && <Modal modalText={modalText} />}

      {books.map((book) => {
        const { id, name } = book;
        return <li key={id}>{name}</li>;
      })}
    </div>
  );
};

export default UseReducer;
*/
