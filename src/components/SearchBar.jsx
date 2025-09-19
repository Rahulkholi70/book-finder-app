import { useState } from "react";
export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };
  return (
    <form
      className="flex justify-center max-w-xl mx-auto"
      onSubmit={handlesubmit}
    >
      <input
        className="flex-1 border border-blue-300 p-3 rounded-lg shadow-sm mr-3"
        type="text"
        placeholder="Search your favourate book"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <button
        type="submit"
        className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-700 "
      >
        Search
      </button>
    </form>
  );
}
