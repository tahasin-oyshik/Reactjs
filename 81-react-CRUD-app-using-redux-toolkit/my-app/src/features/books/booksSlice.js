import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialBooks = {
  books: [
    { id: uuidv4(), title: 'COD complete guide', author: 'Md Tahasin Oyshik' },
    { id: uuidv4(), title: 'Pirates of the Caribbean', author: 'Captain Jack Sparrow' },
  ],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    updateBook: (state, action) => {
      const { id, title, author } = action.payload;
      const isBookExist = state.books.filter((book) => book.id == id);
      if (isBookExist) {
        isBookExist[0].title = title;
        isBookExist[0].author = author;
      }
    },
    deleteBook: (state, action) => {
      const id = action.payload;
      const isBookExist = (state.books = state.books.filter((book) => book.id !== id));
    },
  },
});

// exporting action creator function (showBooks)
export const { showBooks, addBook, deleteBook, updateBook } = booksSlice.actions;

// exporting reducer
export default booksSlice.reducer;
