import { Link } from "react-router-dom";

function SiteFooter() {
  return (
    <footer className="bg-lyken-charcoal px-6 py-16 text-lyken-cream md:px-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <div>
            <Link to="/" className="font-display text-5xl tracking-[0.15em]">
              LYKEN
            </Link>

            <p className="mt-4 text-xs tracking-wide text-lyken-sand">
              Beauty, thoughtfully elevated.
            </p>
          </div>

          <div className="flex flex-col gap-4 text-xs tracking-[0.15em]">
            <Link to="/products">COLLECTION</Link>
            <Link to="/about">OUR STORY</Link>
            <Link to="/contact">CONTACT</Link>
          </div>
        </div>

        <div className="mt-16 border-t border-white/20 pt-6">
          <p className="text-[10px] tracking-wider text-lyken-sand">
            © {new Date().getFullYear()} LYKEN. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;