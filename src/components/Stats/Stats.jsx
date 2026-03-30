import React from "react";

const Stats = () => {
  return (
    <section className="bg-linear-to-r from-blue-500 to-purple-500">
      <div className="flex w-full">
        <div className="card rounded-box grid h-20 grow place-items-center">
          <h1 className="flex items-center justify-center text-4xl text-slate-50 font-bold">
            50K <span>+</span>
          </h1>
          <span className="font-semibold text-slate-300">Active Uses</span>
        </div>

        <div className="divider divider-horizontal"></div>

        <div className="card rounded-box grid h-20 grow place-items-center">
          <h1 className="flex items-center justify-center text-4xl text-slate-50 font-bold">
            200 <span>+</span>
          </h1>
          <span className="font-semibold text-slate-300">Premium Tools</span>
        </div>

        <div className="divider divider-horizontal"></div>

        <div className="card rounded-box grid h-20 grow place-items-center">
          <h1 className="text-4xl text-slate-50 font-bold">4.9</h1>
          <span className="font-semibold text-slate-300">Rating</span>
        </div>
      </div>
    </section>
  );
};

export default Stats;
