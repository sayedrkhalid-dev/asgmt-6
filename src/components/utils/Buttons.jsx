export const ButtonPrimary = ({ text, icon = "" }) => {
  return (
    <button className="btn border-0 p-0.5 bg-gradient text-gray-50 font-semibold px-6 py-2 rounded-full shadow-md shadow-purple-400 cursor-pointer">
      {icon}
      {text}
    </button>
  );
};

export const ButtonSecondary = ({ text, icon = "" }) => {
  return (
    <button className="btn border-0 p-0.5 bg-gradient shadow-md shadow-purple-400 rounded-full cursor-pointer">
      <span className="bg-gray-50 rounded-full">
        <span className="px-6 py-2 flex items-center gap-2 bg-gradient bg-clip-text text-transparent">
          {icon}
          {text}
        </span>
      </span>
    </button>
  );
};

export const ButtonAccent = ({ text, icon = "" }) => {
  return (
    <button className="btn border-2 border-gray-50 p-0.5 bg-gray-50 text-gray-900 font-semibold px-6 py-2 rounded-full shadow-md cursor-pointer">
      {icon}
      {text}
    </button>
  );
};

export const ButtonAccentSecondary = ({ text, icon = "" }) => {
  return (
    <button className="btn border-2 border-gray-50 p-0.5 bg-transparent text-gray-50 font-semibold px-6 py-2 rounded-full shadow-md cursor-pointer">
      {icon}
      {text}
    </button>
  );
};
