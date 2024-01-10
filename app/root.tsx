import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "~/styles/tailwind.css";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import Header from "./components/Header";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-gray-50">
        <div className="flex flex-col h-lvh">
          <Header />
          <div className="flex-1 p-2 overflow-y-auto [&::Webkit-scrollbar]:w-2 [&::Webkit-scrollbar-thumb]:rounded-full [&::Webkit-scrollbar-track]:bg-gray-100 [&::Webkit-scrollbar-thumb]:bg-gray-300">
            <div className="w-full md:w-96 mx-auto my-4">
              <SearchBar />
            </div>
            <Outlet />
          </div>
          <Footer />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
