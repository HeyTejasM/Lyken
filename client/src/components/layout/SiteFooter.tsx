function SiteFooter() {
  return (
    <footer className="bg-[#29251F] px-6 py-12 text-[#F4EFE7] sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row">
        <div>
          <h2 className="font-display text-4xl tracking-[0.15em] text-[#C6A45B]">
            LYKEN
          </h2>
          <p className="mt-3 text-xs tracking-wide text-[#F4EFE7]/60">
            The art of everyday skincare.
          </p>
        </div>

        <div className="flex flex-wrap gap-8 text-xs uppercase tracking-[0.15em] text-[#F4EFE7]/75">
          <a href="/" className="transition-colors hover:text-[#C6A45B]">Home</a>
          <a href="/collection" className="transition-colors hover:text-[#C6A45B]">Collection</a>
          <a href="/about" className="transition-colors hover:text-[#C6A45B]">About</a>
          <a href="/contact" className="transition-colors hover:text-[#C6A45B]">Contact</a>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/15 pt-6 text-[10px] tracking-wide text-[#F4EFE7]/50">
        © {new Date().getFullYear()} LYKEN. All rights reserved.
      </div>
    </footer>
  );
}

export default SiteFooter;
