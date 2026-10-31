import { Link } from "react-router-dom";

const products = [
  { id: 1, label: "PRODUCT ONE" },
  { id: 2, label: "PRODUCT TWO" },
];

function FeaturedProducts() {
  return (
    <section className="bg-lyken-cream px-6 py-24 md:px-16 md:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="mb-4 text-[10px] tracking-[0.3em] text-lyken-muted">
              DISCOVER LYKEN
            </p>

            <h2 className="font-display text-5xl text-lyken-charcoal md:text-7xl">
              The Collection
            </h2>
          </div>

          <Link
            to="/products"
            className="hidden border-b border-lyken-charcoal pb-2 text-[10px] tracking-[0.15em] md:block"
          >
            VIEW ALL
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {products.map((product) => (
            <Link
              to="/products"
              key={product.id}
              className="group block"
            >
              <div className="flex aspect-[4/5] items-center justify-center overflow-hidden bg-lyken-sand transition-colors duration-500 group-hover:bg-[#DDD0C1]">
                <span className="text-[10px] tracking-[0.3em] text-lyken-muted">
                  PRODUCT PHOTOGRAPHY
                </span>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <h3 className="font-display text-2xl text-lyken-charcoal">
                  {product.label}
                </h3>

                <span className="text-xs text-lyken-muted">Explore ↗</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;