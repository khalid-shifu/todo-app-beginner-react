import React from "react";

const bookList = [
  { id: 1, title: "Tale of Two Cities" },
  { id: 2, title: "The Great Gatsby" },
];

const reducer = (state, action) => {
  const allBooks = [...state.books, action.payload];

  switch (action.type) {
    case "ADD":
      return {
        ...state,
        books: allBooks,
        isModalOpen: true,
        modalMessage: `Book "${action.payload.title}" added successfully!`,
      };
    case "REMOVE":
      return {
        ...state,
        books: action.payload.books,
        isModalOpen: true,
        modalMessage: `Book "${action.payload.title}" removed successfully!`,
      };
  }
  return state;
};

const UseReducerExample = () => {
  const [bookStates, dispatch] = React.useReducer(reducer, {
    books: bookList,
    isModalOpen: false,
    modalMessage: "",
  });

  const [bookName, setBookName] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: bookStates.books.length + 1,
      title: bookName,
    };

    dispatch({
      type: "ADD",
      payload: newBook,
    });
    setBookName("");
  };

  const handleRevomal = (id) => {
    const bookToRemove = bookStates.books.find((book) => book.id === id);
    const updatedBooks = bookStates.books.filter((book) => book.id !== id);
    dispatch({
      type: "REMOVE",
      payload: {
        books: updatedBooks,
        title: bookToRemove.title,
      },
    });
    setBookName("");
  };

  return (
    <div>
      <h1>Book List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a book"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
        />
        <button type="submit">Add</button>
        {bookStates.isModalOpen && (
          <p style={{ color: "green" }}>{bookStates.modalMessage}</p>
        )}
        <ul>
          {bookStates.books.map((book) => (
            <li
              key={book.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "8px",
              }}
            >
              <p>{book.title}</p>
              <button onClick={() => handleRevomal(book.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default UseReducerExample;
