import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center">
      <h1 className="font-display text-7xl">404</h1>
      <p className="mt-4 text-lyken-muted">This page does not exist.</p>
      <Link to="/" className="mt-8 border-b border-lyken-charcoal pb-2 text-xs tracking-widest">
        RETURN HOME
      </Link>
    </main>
  );
}
