import { Link } from "@remix-run/react";

function Footer() {
  return (
    <footer className="p-2 border-t border-rose-200 bg-rose-50">
      <Link to="/" prefetch="intent" className="text-sm font-semibold">
        Open<span className="text-rose-400">Library</span>
      </Link>
    </footer>
  );
}

export default Footer;
