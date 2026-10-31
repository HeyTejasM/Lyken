import { motion } from "framer-motion";

const ingredients = [
  {
    amount: "10%",
    name: "3-O Ethyl Ascorbic Acid",
    description: "A stable vitamin C derivative.",
  },
  {
    amount: "5%",
    name: "Niacinamide",
    description: "A versatile form of vitamin B3.",
  },
  {
    amount: "+",
    name: "Hyaluronic Acid",
    description: "A moisture-binding skincare ingredient.",
  },
];

function FeaturedProducts() {
  return (
    <section id="featured" className="scroll-mt-24 bg-[#F4EFE7]">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative flex min-h-[560px] items-center justify-center overflow-hidden bg-[#E8DED1] p-10 sm:p-16"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FAF8F4] via-[#E8DED1] to-[#D5C4B1]" />

          <img
            src="/images/lyken-vitamin-c-serum.jpg"
            alt="LYKEN Vitamin C Glow Serum, 30 ml"
            className="relative z-10 max-h-[480px] w-full object-contain drop-shadow-[0_25px_25px_rgba(41,37,31,0.18)]"
          />

          <span className="absolute bottom-8 left-8 text-[10px] uppercase tracking-[0.3em] text-[#76695B]">
            The LYKEN collection · 01
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center px-8 py-20 sm:px-14 lg:px-20"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-[#A58B73]">
            Featured formulation
          </p>

          <h2 className="mt-6 font-display text-5xl leading-tight text-[#29251F] sm:text-6xl">
            Vitamin C
            <br />
            <span className="italic text-[#A58B73]">Glow Serum</span>
          </h2>

          <p className="mt-5 text-xs uppercase tracking-[0.2em] text-[#76695B]">
            30 ml · All skin types
          </p>

          <p className="mt-8 max-w-md text-sm leading-8 text-[#76695B]">
            A thoughtfully formulated serum featuring a blend of skincare
            ingredients, including a vitamin C derivative, niacinamide and
            hyaluronic acid.
          </p>

          <div className="mt-10 border-t border-[#D8CCBE]">
            {ingredients.map((ingredient) => (
              <div
                key={ingredient.name}
                className="flex items-center gap-5 border-b border-[#D8CCBE] py-5"
              >
                <span className="w-12 font-display text-2xl text-[#A58B73]">
                  {ingredient.amount}
                </span>
                <div>
                  <h3 className="text-sm font-medium text-[#29251F]">
                    {ingredient.name}
                  </h3>
                  <p className="mt-1 text-xs text-[#76695B]">
                    {ingredient.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://www.amazon.in/"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex w-fit items-center gap-6 bg-[#29251F] px-8 py-4 text-xs uppercase tracking-[0.2em] text-[#FAF8F4] transition-colors duration-300 hover:bg-[#A58B73]"
          >
            Buy now
            <span aria-hidden="true">?</span>
          </a>

          <p className="mt-4 text-[10px] text-[#76695B]">
            Replace the Amazon link with the product's actual listing URL.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
