import {
  json,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import { useLoaderData, useNavigation } from "@remix-run/react";
import List from "~/components/List";
import Loader from "~/components/Loader";
import { OpenLibraryResponse } from "~/Types/book";
import { emptyOpenLibraryResponse } from "~/Types/bookData";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const bookName = new URL(request.url).searchParams.get("bookname");
  if (!bookName)
    return {
      founded: false,
      errorMsg: "Search book.",
      data: emptyOpenLibraryResponse,
      q: bookName,
    };

  const data = await fetch(`https://openlibrary.org/search.json?q=${bookName}`)
    .then(async (res) => ({
      founded: true,
      errorMsg: "",
      data: (await res.json()) as unknown as OpenLibraryResponse,
      q: bookName,
    }))
    .catch(() => ({
      founded: false,
      errorMsg: "Error while getting books.",
      data: emptyOpenLibraryResponse,
      q: bookName,
    }));

  return json(data);
};

export default function Index() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const books = useLoaderData<typeof loader>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Loader isLoading={isLoading} />
      {!isLoading && !books.founded && (
        <p className="text-xl text-rose-500 text-center my-20">
          {books.errorMsg}
        </p>
      )}
      {!isLoading && books.founded && <List books={books.data.docs} />}
    </div>
  );
}
