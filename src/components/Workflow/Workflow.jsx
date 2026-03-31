const Workflow = () => {
  return (
    <section className="bg-linear-to-r from-blue-500 to-purple-500 py-16 mt-16">
      <div className="w-full max-w-10/12 mx-auto flex flex-col justify-center items-center text-center gap-4">
        {/* Workflow title */}
        <h1 className="text-2xl text-gray-50 md:text-3xl/snug lg:text-4xl/snug tracking-wide font-bold">
          Ready to Transform Your Workflow?
        </h1>

        {/* Workflow description */}
        <p className="text-base/6 text-gray-300 tracking-wide md:px-32">
          Join thousands of professionals who are already using Digitools to
          work smarter. Start your free trial today.
        </p>

        {/* Workflow buttons */}
        <div className="flex gap-2 flex-wrap">
          {/* Primary button */}
          <button className="bg-gray-50 text-gray-900 border border-gray-50 px-6 py-2 rounded-full font-semibold transition-all duration-150 cursor-pointer hover:trangray-y-0.5 shadow-md">
            Explore Products
          </button>

          {/* Primary button outlined */}
          <button className="bg-transparent text-gray-50 border border-gray-50 px-6 py-2 rounded-full font-semibold transition-all duration-150 cursor-pointer hover:trangray-y-0.5 shadow-md">
            View Pricing
          </button>
        </div>

        <p className="text-base/6 text-gray-300 tracking-wide">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default Workflow;
