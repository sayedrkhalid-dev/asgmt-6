import { use } from "react";
import Price from "../components/Price/Price";

const Pricing = ({ pricesPromise }) => {
  const { prices } = use(pricesPromise);

  return (
    <section>
      <div className="w-full max-w-10/12 mx-auto py-10 mt-16">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col justify-center-center items-center gap-4">
            {/* Banner title */}
            <h1 className="text-2xl md:text-3xl/snug lg:text-4xl/snug tracking-wide font-bold text-center">
              Simple, Transparent Pricing
            </h1>

            {/* Banner description */}
            <p className="text-slate-600 text-center lg:px-30">
              Choose the plan that fits your needs. Upgrade or downgrade
              anytime.
            </p>
          </div>

          {/* Prices */}
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prices.map((price) => (
              <Price key={price.id} price={price} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
