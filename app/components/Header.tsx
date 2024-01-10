import { Link } from "@remix-run/react";

function Header() {
  return (
    <header className="px-2 py-4 border-b-2 border-rose-400 bg-rose-50">
      <nav>
        <Link to="/" prefetch="intent" className="text-2xl font-semibold">
          Open<span className="text-rose-400">Library</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
