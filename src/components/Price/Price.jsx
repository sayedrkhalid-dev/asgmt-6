import { Check } from "lucide-react";

const Price = ({ price }) => {
  const badge = {
    starter: "bg-green-100 border-green-300 text-green-500",
    pro: "bg-purple-100 border-purple-300 text-purple-600",
    enterprise: "bg-amber-100 border-amber-300 text-amber-500",
  };

  console.log(price);

  return (
    <li
      className={`card bg-base-100 ${price.tagType === "pro" && "bg-linear-to-r from-blue-600 to-purple-600"} border border-slate-300 shadow-md transition duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-xl ${price.tagType === "pro" && "shadow-2xl"}`}
    >
      {/* Product body */}
      <div className="card-body mt-8">
        {/* Product badge */}
        <span
          className={`absolute top-0 right-[50%] translate-x-[50%] translate-y-[-50%] px-4 py-1 border font-semibold capitalize rounded-full ${price.tagType === "starter" ? badge.starter : price.tagType === "pro" ? badge.pro : badge.enterprise}`}
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
        <button
          className={`btn border-0 p-0.5 font-semibold px-6 py-2 rounded-full shadow-md shadow-purple-400 cursor-pointer ${price.tagType !== "pro" ? " bg-gradient text-gray-50" : "bg-gray-50 text-gray-900"}`}
        >
          {price.tagType === "starter"
            ? "Get Started Free"
            : price.tagType === "pro"
              ? "Start Pro Trial"
              : "Contact Sales"}
        </button>
      </div>
    </li>
  );
};

export default Price;
