import { Check } from "lucide-react";

const Price = ({ price }) => {
  return (
    <li
      className={`card bg-base-100 ${price.tagType === "pro" && "bg-linear-to-r from-blue-500 to-purple-500"} border border-slate-300 shadow-md relative transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl ${price.tagType === "pro" && "scale-105 shadow-2xl"}`}
    >
      {/* Product body */}
      <div className="card-body mt-8">
        {/* Product badge */}
        <span
          className={`badge badge-md badge-soft border flex justify-center items-center capitalize font-nornal absolute top-0 right-[50%] translate-x-[50%] translate-y-[-50%] shadow-md ${price.tagType === "starter" ? "bg-green-100 border-green-300 text-green-500" : price.tagType === "pro" ? "bg-purple-100 border-purple-300 text-purple-500" : "bg-amber-100 border-amber-300 text-amber-500"}`}
        >
          {price.tag}
        </span>

        {/* Product name, des, price */}
        <div className="flex flex-col gap-2">
          {/* Product name */}
          <h2
            className={`text-xl font-semibold ${price.tagType === "pro" && "text-slate-50"}`}
          >
            {price.name}
          </h2>

          {/* Product description */}
          <p
            className={`text-sm w-60 h-12 ${price.tagType === "pro" && "text-slate-200"}`}
          >
            {price.description}
          </p>

          {/* Product price */}
          <span
            className={`text-xl ${price.tagType === "pro" && "text-slate-50"}`}
          >
            ${price.price}
            <span
              className={`text-sm capitalize ${price.tagType === "pro" && "text-slate-300"}`}
            >
              /{price.period}
            </span>
          </span>
        </div>

        {/* Product features */}
        <ul className="mt-6 flex flex-col gap-2">
          {price.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 static">
              <Check
                size={18}
                stroke={price.tagType === "pro" ? "white" : "blue"}
              />
              <span
                className={`text-sm ${price.tagType === "pro" && "text-slate-50"}`}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* Buy now button */}
        <div
          className={`rounded-3xl ${price.tagType !== "pro" ? "bg-linear-to-r from-blue-500 to-purple-500 text-slate-50 shadow-md shadow-purple-400 hover:shadow-md" : "bg-slate-50"} hover:translate-y-0.5 transition-all duration-150 mt-6`}
        >
          <button className="w-full text-center text-base rounded-3xl px-4 py-2 font-semibold transition-all duration-150 cursor-pointer">
            {price.tagType === "starter"
              ? "Get Started Free"
              : price.tagType === "pro"
                ? "Start Pro Trial"
                : "Contact Sales"}
          </button>
        </div>
      </div>
    </li>
  );
};

export default Price;
