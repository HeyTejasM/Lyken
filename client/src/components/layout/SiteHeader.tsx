import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", to: "/" },
    { label: "Collection", to: "/products" },
    { label: "Our Story", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-lyken-sand bg-lyken-cream/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 md:px-12">
        <button onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <Link to="/" className="font-display text-4xl tracking-[0.18em]">
          LYKEN
        </Link>

        <Link to="/products" className="text-[10px] tracking-[0.2em]">
          EXPLORE
        </Link>
      </div>

      {open && (
        <nav className="absolute left-0 top-full w-full border-t border-lyken-sand bg-lyken-cream px-8 py-8">
          <div className="mx-auto flex max-w-6xl flex-col gap-6">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="font-display text-3xl"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
