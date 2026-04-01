import userIcon from "../assets/user.png";
import packageIcon from "../assets/package.png";
import rocketIcon from "../assets/rocket.png";

const steps = [
  {
    id: 1,
    name: "Create Account",
    description:
      "Sign up for free in seconds. No credit card required to get started.",
    icon: userIcon,
  },
  {
    id: 2,
    name: "Choose Products",
    description:
      "Browse our catalog and select the tools that fit your needs. Choose Products.",
    icon: packageIcon,
  },
  {
    id: 3,
    name: "Start Creating",
    description: "Download and start using your premium tools immediately.",
    icon: rocketIcon,
  },
];

const GetStart = () => {
  return (
    <section>
      <div className="w-full max-w-10/12 mx-auto my-4 py-4 flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-2xl md:text-3xl/snug lg:text-4xl/snug tracking-wide font-bold text-center">
            Get Started in 3 Steps
          </h1>
          <p className="text-gray-700 text-center lg:px-30">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="card flex items-center justify-center text-center gap-2 bg-gray-100 p-8 rounded-xl border border-gray-300 relative"
            >
              {/* Step number badge */}
              <span className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 text-sm bg-gradient text-gray-50 border font-semibold rounded-full">
                0{step.id}
              </span>

              {/* Icon */}
              <span className="w-fit p-4 bg-blue-100/65 border border-blue-300 rounded-full text-2xl mb-4">
                <img src={step.icon} alt={step.name} className="w-10 h-10" />
              </span>

              {/* Content */}
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold">{step.name}</h2>
                <p className="text-sm text-gray-500">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetStart;
