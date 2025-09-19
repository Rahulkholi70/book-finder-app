export default function BookCard({ book }) {
  const coverId = book.cover_i;
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : "https://via.placeholder.com/150x200?text=No+Cover";
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden m-5 p-5">
      <img
        src={coverUrl}
        alt={book.title}
        className="w-full h-50 object-cover"
      />
      <div className="p-3 space-y-1">
        <h1 className="text-base font-semibold text-gray-900 line-clamp-2">
          {book.title}
        </h1>
        <p className="text-sm text-gray-600">
          {book.author_name?.[0] || "Unknown author"}
        </p>
        <p className="text-xs text-gray-500">
          First Published: {book.first_publish_year || "N/A"}
        </p>
      </div>
    </div>
  );
}
