const Workflow = () => {
  return (
    <section className="bg-linear-to-r from-blue-500 to-purple-500">
      <div className="w-full max-w-10/12 mx-auto flex flex-col justify-center items-center text-center gap-4">
        {/* Workflow title */}
        <h1 className="text-2xl text-slate-50 md:text-3xl/snug lg:text-4xl/snug tracking-wide font-bold">
          Ready to Transform Your Workflow?
        </h1>

        {/* Workflow description */}
        <p className="text-base/6 text-slate-300 tracking-wide px-32">
          Join thousands of professionals who are already using Digitools to
          work smarter. Start your free trial today.
        </p>

        {/* Workflow buttons */}
        <div className="flex gap-2 flex-wrap">
          {/* Primary button */}
          <div className="inline-block p-0.5 rounded-3xl bg-linear-to-r from-blue-500 to-purple-500 text-slate-50 shadow shadow-purple-400 hover:shadow-md hover:translate-y-0.5 transition-all duration-150">
            <button className="flex items-center gap-2 rounded-3xl px-4 py-2 font-semibold transition-all duration-150 cursor-pointer">
              Explore Products
            </button>
          </div>

          {/* Primary button outlined */}
          <div className="inline-block p-0.5 rounded-3xl bg-linear-to-r from-blue-500 to-purple-500 shadow-purple-400 hover:shadow-md hover:translate-y-0.5 transition-all duration-150">
            <button className="flex items-center gap-2 rounded-3xl px-4 py-2 bg-base-100 text-slate-700 hover:text-slate-900 font-semibold  transition-all duration-150 cursor-pointer">
              View Pricing
            </button>
          </div>
        </div>

        <p className="text-base/6 text-slate-300 tracking-wide">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default Workflow;
