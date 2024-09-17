import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      const response = await axios.get('/api/books');
      setBooks(response.data);
    }
    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book._id}>{book.title} by {book.author} ({book.year})</li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
