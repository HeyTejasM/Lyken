import { motion } from "framer-motion";

function BrandIntro() {
  return (
    <section className="bg-[#FAF8F4] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-4xl text-center"
      >
        <p className="text-xs uppercase tracking-[0.35em] text-[#A58B73]">
          A considered approach to beauty
        </p>

        <h2 className="mt-7 font-display text-4xl leading-tight text-[#29251F] sm:text-5xl lg:text-6xl">
          Skincare should feel like
          <span className="italic text-[#A58B73]"> a ritual,</span>
          <br className="hidden sm:block" /> not a routine.
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-[#76695B] sm:text-base">
          At LYKEN, we believe the little moments of care matter. Our approach
          brings together thoughtfully selected ingredients and a simple,
          intentional approach to everyday skincare.
        </p>

        <div className="mx-auto mt-10 h-px w-20 bg-[#C6A45B]" />
      </motion.div>
    </section>
  );
}

export default BrandIntro;
