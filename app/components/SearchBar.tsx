import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Form, useSubmit } from "@remix-run/react";
import { SomeFunction, useDebounce } from "~/hooks/useDebounce";

function SearchBar() {
  const submit = useSubmit();
  const [searchParams] = useSearchParams();
  const bookname = searchParams.get("bookname") || "";
  const [inputValue, setInputValue] = useState(bookname);
  const formRef = useRef(null);

  const debouncedSubmit = useDebounce(submit as SomeFunction, 500);

  useEffect(() => {
    debouncedSubmit(formRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  return (
    <Form ref={formRef} method="get" className="flex items-center">
      <label htmlFor="bookname" className="sr-only">
        Search Book
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-rose-500"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
        </div>
        <input
          type="text"
          id="bookname"
          name="bookname"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-rose-500 focus:border-rose-500 block w-full ps-10 p-2.5 "
          placeholder="Search book..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
        />
      </div>
      {/* <button
        disabled={navigation.state === "loading"}
        type="submit"
        className="p-2.5 ms-2 text-sm font-medium text-white bg-rose-500 rounded hover:bg-rose-700 focus:ring-4 focus:outline-none focus:ring-rose-300 disabled:opacity-75 disabled:bg-gray-500"
      >
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <span className="sr-only">Search</span>
      </button> */}
    </Form>
  );
}

export default SearchBar;
