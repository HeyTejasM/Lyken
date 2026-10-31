import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function HomeHero() {
  return (
    <section className="relative flex min-h-[680px] items-center overflow-hidden bg-lyken-sand md:min-h-[780px]">
      {/* Temporary visual placeholder. Replace with editorial photography. */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E8DED1] via-[#D8C6B3] to-[#A58B73]" />

      <div className="absolute inset-0 bg-black/10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 mx-auto w-full max-w-[1440px] px-8 py-24 md:px-20"
      >
        <p className="mb-8 text-[10px] tracking-[0.35em] text-white">
          THE ART OF SELF-CARE
        </p>

        <h1 className="max-w-3xl font-display text-6xl leading-[0.95] text-white md:text-8xl lg:text-9xl">
          The art of
          <br />
          beautiful skin.
        </h1>

        <p className="mt-8 max-w-sm text-sm leading-7 text-white/90">
          Beauty, thoughtfully elevated.
        </p>

        <Link
          to="/products"
          className="mt-10 inline-flex border border-white px-8 py-4 text-[10px] tracking-[0.2em] text-white transition-colors duration-300 hover:bg-white hover:text-lyken-charcoal"
        >
          DISCOVER THE COLLECTION
        </Link>
      </motion.div>
    </section>
  );
}

export default HomeHero;