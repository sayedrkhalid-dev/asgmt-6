const Workflow = () => {
  return (
    <section className="bg-linear-to-r from-blue-600 to-purple-600">
      <div className="w-full max-w-10/12 mx-auto py-16 flex flex-col justify-center items-center text-center gap-4">
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
          <button className="btn border-2 border-gray-50 p-0.5 bg-gray-50 text-gray-900 font-semibold px-6 py-2 rounded-full shadow-md cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-0.5">
            Explore Products
          </button>

          {/* Primary button outlined */}
          <button className="btn border-2 border-gray-50 p-0.5 bg-transparent text-gray-50 font-semibold px-6 py-2 rounded-full shadow-md cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-0.5">
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
