import React from "react";

const bookList = [
  { id: 1, title: "Tale of Two Cities" },
  { id: 2, title: "Harry Potter" },
  { id: 3, title: "The Hobbit" },
  { id: 4, title: "The Great Gatsby" },
  { id: 5, title: "1984" },
];

const WithOutReducer = () => {
  const [books, setBooks] = React.useState(bookList);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [modalMessage, setModalMessage] = React.useState("");
  const [bookName, setBookName] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: books.length + 1,
      title: bookName,
    };
    setBooks((prevBooks) => [...prevBooks, newBook]);
    setBookName("");
    setIsModalOpen(true);
    setModalMessage(`Book "${bookName}" added successfully!`);
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
        {isModalOpen && <p style={{ color: "green" }}>{modalMessage}</p>}
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <p>{book.title}</p>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default WithOutReducer;
