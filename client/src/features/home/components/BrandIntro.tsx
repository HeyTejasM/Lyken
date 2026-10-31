import { motion } from "framer-motion";

function BrandIntro() {
  return (
    <section className="bg-lyken-ivory px-6 py-28 md:py-40">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="mb-8 text-[10px] tracking-[0.3em] text-lyken-muted">
          THE LYKEN PHILOSOPHY
        </p>

        <h2 className="font-display text-5xl leading-tight text-lyken-charcoal md:text-7xl">
          Beauty is found in the details.
        </h2>

        <p className="mx-auto mt-8 max-w-xl text-sm leading-8 text-lyken-muted">
          A considered approach to beauty, where simplicity meets thoughtful
          design. Discover a new expression of everyday self-care.
        </p>
      </motion.div>
    </section>
  );
}

export default BrandIntro;