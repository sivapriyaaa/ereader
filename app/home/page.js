import Image from "next/image";
import Link from "next/link";

async function getBooks() {
  const res = await fetch("https://gutendex.com/books");

  return res.json();
}

const PDF = async () => {
  const result = await getBooks();
  const books = result.results;
  return (
    <div className="flex flex-row flex-wrap justify-center mt-16">
      {" "}
      {books.map((book) => (
        <Link href={`/pageview/${book.id}`}>
          <div className="w-80 h-100 max-w-sm rounded overflow-hidden shadow-lg m-4">
            <img
              src={book.formats["image/jpeg"]}
              alt={book.title}
              className="ml-16 mt-2 w-40 h-60 object-cover mr-4"
            />

            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{book.title}</div>
              <p className="text-gray-700 text-base">{book.authors[0].name}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PDF;
