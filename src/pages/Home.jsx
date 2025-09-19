import { useState } from "react";
import BookCard from "../components/BookCard";
import SearchBar from "../components/searchBar";

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (q) => {
    if (!q) return;
    setLoading(true);
    setError(null);
    setBooks([]);
    try {
      const res = await fetch(`https://openlibrary.org/search.json?title=${q}`);
      const data = await res.json();

      if (data.docs.length === 0) {
        setError("No books found.");
      } else {
        setBooks(data.docs.slice(0, 12));
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-5">
      <h1 className="text-3xl font-extrabold text-center text-blue-400 mb-5">
        {" "}
        Book Finder App
      </h1>
      <p className="text-center text-xl font-light mb-4">
        Search for books by title
      </p>
      {/* <searchBar onSearch={handleSearch} /> */}
      <SearchBar onSearch={handleSearch} />
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 ">
        {books.map((book) => (
          <BookCard key={book.key} book={book} />
        ))}
      </div>
    </div>
  );
}
export default Home;
