import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './BookList';
import AddBookForm from './AddBookForm';
import LoginPage from './LoginPage.jsx';
import '../App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Elyssian Books</h1>
          <nav>
            <a href="/">Home</a>
            <a href="/books">Books</a>
            <a href="/add-book">Add Book</a>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/books" element={<BookList />} />
            <Route path="/add-book" element={<AddBookForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
