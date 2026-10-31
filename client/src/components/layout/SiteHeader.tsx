import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="relative z-50 border-b border-lyken-sand bg-lyken-cream">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 md:px-12">
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          className="text-lyken-charcoal"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <Link
          to="/"
          onClick={closeMenu}
          className="font-display text-4xl tracking-[0.12em] text-lyken-charcoal"
        >
          LYKEN
        </Link>

        <Link
          to="/contact"
          className="text-[10px] tracking-[0.2em] text-lyken-charcoal"
        >
          CONTACT
        </Link>
      </div>

      {menuOpen && (
        <nav className="absolute left-0 top-full w-full border-t border-lyken-sand bg-lyken-cream px-8 py-8 shadow-lg">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-6">
            <Link onClick={closeMenu} to="/" className="font-display text-3xl">
              Home
            </Link>
            <Link onClick={closeMenu} to="/products" className="font-display text-3xl">
              Collection
            </Link>
            <Link onClick={closeMenu} to="/about" className="font-display text-3xl">
              Our Story
            </Link>
            <Link onClick={closeMenu} to="/contact" className="font-display text-3xl">
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export default SiteHeader;