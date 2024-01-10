import { Book } from "~/Types/book";

interface ListProps {
  books: Book[];
}

function List({ books }: ListProps) {
  if (books.length === 0)
    return (
      <p className="text-xl text-rose-500 text-center my-20">No book found.</p>
    );

  return (
    <div className="hs-accordion-group my-2 w-full ">
      <ul className="flex gap-4 flex-wrap mx-auto">
        {books.map((book) => (
          <li
            className="flex max-w-sm p-4 gap-2 mx-auto bg-gray-50 border border-gray-200 rounded-lg shadow flex-1"
            key={book.key}
          >
            <div className="flex flex-col flex-1 min-w-0 ms-4">
              <h5 className="mb-1 text-2xl font-semibold tracking-tight text-rose-500">
                {book.title}
              </h5>
              {book.author_name && (
                <p className="text-md font-medium text-gray-700 truncate mb-4">
                  Author::{" "}
                  <span className="font-semibold">{book.author_name}</span>
                </p>
              )}
              {book.first_publish_year && (
                <p className="text-sm font-normal text-gray-700 mt-auto">
                  1<sup>st</sup> publish date:{" "}
                  <span className="font-semibold">
                    {book.first_publish_year}
                  </span>
                </p>
              )}
              {book.isbn && (
                <p className="text-sm font-normal text-gray-700 truncate">
                  ISBN:: <span className="font-semibold">{book.isbn}</span>
                </p>
              )}
            </div>
            <div className="flex flex-col">
              {book.publish_date && (
                <p className="self-end text-xs text-gray-700 flex flex-col items-end mb-2">
                  Latest:
                  <span className="font-semibold">{book.publish_date[0]}</span>
                </p>
              )}
              {book.number_of_pages_median && (
                <p className="self-end text-xs text-gray-700 flex flex-col items-end">
                  Pages:{" "}
                  <span className="font-semibold">
                    {book.number_of_pages_median}
                  </span>
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
