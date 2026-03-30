import { Play } from "lucide-react";
import banner_img from "../../assets/banner.png";

const Banner = () => {
  return (
    <section>
      {/* Banner content */}
      <div className="w-full max-w-11/12 mx-auto flex items-center justify-between">
        {/* Banner left */}
        <div className="flex flex-col gap-4">
          {/* Banner Badge */}
          <p className="w-fit inline-flex items-center gap-3 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium shadow-sm border border-purple-100 backdrop-blur-md">
            {/* Animated Dot */}
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-95"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
            </span>

            {/* Text */}
            <span className="tracking-wide">AI-Powered Tools Available</span>
          </p>

          {/* Banner title */}
          <h1 className="text-5xl/snug tracking-wide font-bold">
            Supercharge Your <br /> Digital Workflow
          </h1>

          <p className="text-base/6 tracking-wide text-slate-300">
            Access premium AI tools, design assets, templates, and productivity{" "}
            <br />
            software—all in one place. Start creating faster today. <br />
            Explore Products
          </p>

          <div className="flex gap-2">
            {/* Primary button */}
            <div className="inline-block p-0.5 rounded-3xl bg-linear-to-r from-blue-500 to-purple-500 shadow shadow-purple-400 hover:shadow-md">
              <button className="flex items-center gap-2 rounded-3xl px-8 py-2 font-semibold text-slate-50 transition-all duration-150 cursor-pointer">
                Explore Products
              </button>
            </div>

            {/* Primary button outlined */}
            <div className="inline-block p-0.5 rounded-3xl bg-linear-to-r from-blue-500 to-purple-500 shadow-md">
              <button className="flex items-center gap-2 rounded-3xl px-8 py-2 bg-base-100 font-semibold text-slate-50 transition-all duration-150 cursor-pointer">
                <Play size={20} />
                Watch Demo
              </button>
            </div>
          </div>
        </div>

        {/* Banner right */}
        <div className="flex justify-center items-center">
          {/* Banner image */}
          <div className="w-125 h-145 opacity-85 p-16">
            <img src={banner_img} alt="Banner" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
