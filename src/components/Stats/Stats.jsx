const Stats = () => {
  return (
    <section className="bg-linear-to-r from-blue-600 to-purple-600">
      <div className="w-full max-w-10/12 mx-auto my-4 py-4 flex">
        <div className="card rounded-box grid grow place-items-center">
          <h1 className="flex items-center justify-center text-4xl text-gray-50 font-bold">
            50K <span>+</span>
          </h1>
          <span className="font-semibold text-gray-300">Active Uses</span>
        </div>

        <div className="divider divider-horizontal"></div>

        <div className="card rounded-box grid h-20 grow place-items-center">
          <h1 className="flex items-center justify-center text-4xl text-gray-50 font-bold">
            200 <span>+</span>
          </h1>
          <span className="font-semibold text-gray-300">Premium Tools</span>
        </div>

        <div className="divider divider-horizontal"></div>

        <div className="card rounded-box grid h-20 grow place-items-center">
          <h1 className="text-4xl text-gray-50 font-bold">4.9</h1>
          <span className="font-semibold text-gray-300">Rating</span>
        </div>
      </div>
    </section>
  );
};

export default Stats;
