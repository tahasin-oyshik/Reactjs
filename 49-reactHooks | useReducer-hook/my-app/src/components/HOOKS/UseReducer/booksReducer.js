const booksReducer = (state, action) => {
  // action.type, action.payload
  if (action.type == 'ADD') {
    const allBooks = [...state.books, action.payload];
    return {
      ...state,
      books: allBooks,
      isModalOpen: true,
      modalText: 'book is added',
    };
  }
  if (action.type == 'REMOVE') {
    const filterBooks = [...state.books].filter((book) => book.id !== action.payload);
    return {
      ...state,
      books: filterBooks,
      isModalOpen: true,
      modalText: 'book is removed',
    };
  }
  return state;
};

export default booksReducer;
