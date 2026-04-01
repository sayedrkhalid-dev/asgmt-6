import banner_img from "../../assets/banner.png";
import { Play } from "lucide-react";

const Banner = () => {
  return (
    <section>
      <div className="w-full max-w-10/12 mx-auto my-4 py-4 flex justify-between relative sm:static">
        {/* Banner left - (Banner content) */}
        <div className="w-full flex flex-col justify-center gap-4">
          {/* Banner Badge */}
          <p className="w-fit inline-flex items-center gap-3 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium shadow-sm border border-purple-300 backdrop-blur-md">
            {/* Animated Dot */}
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-95"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-600"></span>
            </span>

            {/* Text */}
            <span className="tracking-wide">AI-Powered Tools Available</span>
          </p>

          {/* Banner title */}
          <h1 className="text-3xl md:text-4xl/snug lg:text-5xl/snug tracking-wide font-bold">
            Supercharge Your <br /> Digital Workflow
          </h1>

          {/* Banner description */}
          <p className="text-base/6 tracking-wide text-gray-700">
            Access premium AI tools, design assets, templates, and productivity{" "}
            <br />
            software—all in one place. Start creating faster today. <br />
            Explore Products
          </p>

          {/* Banner buttons */}
          <div className="flex gap-2">
            {/* Primary button */}
            <button className="btn border-0 p-0.5 bg-gradient text-gray-50 font-semibold px-6 py-2 rounded-full shadow-md shadow-purple-400 cursor-pointer transition-all duration-300 hover:-translate-y-0.5">
              Explore Products
            </button>

            {/* Secondary button outlined */}
            <button className="btn border-0 p-0.5 bg-gradient shadow-md shadow-purple-400 rounded-full cursor-pointer transition-all duration-300 hover:-translate-y-0.5">
              <span className="bg-gray-50 rounded-full">
                <span className="px-6 py-2 flex items-center gap-2 bg-gradient bg-clip-text text-transparent">
                  <Play size={20} stroke="blue" />
                  Watch Demo
                </span>
              </span>
            </button>
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
