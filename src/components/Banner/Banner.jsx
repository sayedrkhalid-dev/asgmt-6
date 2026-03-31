import { Play } from "lucide-react";
import banner_img from "../../assets/banner.png";

const Banner = () => {
  return (
    <section>
      <div className="w-full max-w-10/12 mx-auto mt-8 sm:mt-0 flex justify-between relative sm:static py-8">
        {/* Banner left - (Banner content) */}
        <div className="w-full flex flex-col justify-center gap-4">
          {/* Banner Badge */}
          <p className="w-fit inline-flex items-center gap-3 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium shadow-sm border border-purple-300 backdrop-blur-md">
            {/* Animated Dot */}
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-95"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
            </span>

            {/* Text */}
            <span className="tracking-wide">AI-Powered Tools Available</span>
          </p>

          {/* Banner title */}
          <h1 className="text-3xl md:text-4xl/snug lg:text-5xl/snug tracking-wide font-bold">
            Supercharge Your <br /> Digital Workflow
          </h1>

          {/* Banner description */}
          <p className="text-base/6 tracking-wide text-slate-600">
            Access premium AI tools, design assets, templates, and productivity{" "}
            <br />
            software—all in one place. Start creating faster today. <br />
            Explore Products
          </p>

          {/* Banner buttons */}
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
                <Play size={20} />
                Watch Demo
              </button>
            </div>
          </div>
        </div>

        {/* Banner right - (Banner image) */}
        <div className="w-full flex absolute sm:static to-0 left-0 -z-10">
          <img
            src={banner_img}
            alt="Banner"
            className="w-full sm:h-120 object-contain opacity-15 sm:opacity-75"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
