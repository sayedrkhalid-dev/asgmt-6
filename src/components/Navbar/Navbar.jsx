import { Menu, Moon, Sun, ShoppingCart } from "lucide-react";
import { useState } from "react";

const Navbar = ({ items }) => {
  const [activeLink, setactiveLink] = useState("home");

  return (
    <nav className="sticky top-0 z-10 bg-gray-50 shadow-md">
      {/* Navbar container */}
      <div className="w-full py-1 max-w-10/12 mx-auto flex items-center justify-center gap-2">
        {/* Navbar content */}
        <div className="navbar bg-base-100">
          {/* Navbar start */}
          <div className="navbar-start">
            <div className="dropdown">
              {/* hamburger menu for mobile view */}
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost xl:hidden p-2 rounded-lg"
              >
                <Menu size={24} stroke="blue" />
              </div>

              {/* hamburger menu items */}
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {items.map((item) => (
                  <li key={item.id}>
                    <a
                      className={`link hover:bg-transparent no-underline text-base font-semibold capitalize bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text hover:text-transparent transition duration-300 ${activeLink === item.label ? "text-transparent" : ""}`}
                      onClick={() => setactiveLink(item.label)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navbar brand */}
            <a className="text-3xl font-semibold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hidden md:inline-block">
              DigiTools
            </a>
          </div>

          {/* Navbar center */}
          <div className="navbar-center hidden xl:flex">
            <ul className="menu menu-horizontal px-1">
              {items.map((item) => (
                <li key={item.id}>
                  <a
                    className={`link hover:bg-transparent no-underline text-base font-semibold capitalize bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text hover:text-transparent transition duration-300 ${activeLink === item.label ? "text-transparent" : ""}`}
                    onClick={() => setactiveLink(item.label)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navbar end */}
          <div className="navbar-end gap-4">
            {/* Shopping cart */}
            <div className="relative">
              <ShoppingCart size={20} className="cursor-pointer" />
              <span className="flex justify-center items-center absolute top-[-50%] right-[-50%] w-5 h-5 bg-purple-600 text-sm font-semibold text-gray-50 rounded-full">
                {/* {cart.length} */}0
              </span>
            </div>

            {/* Login link */}
            <a href="#" className="text-sm font-semibold select-none">
              Login
            </a>

            {/* Get Started button */}
            <button className="btn border-0 p-0.5 bg-gradient text-gray-50 font-semibold px-6 py-2 rounded-full shadow-md shadow-purple-400 cursor-pointer">
              Get Started
            </button>
          </div>
        </div>

        {/* Theme controller */}
        <label className="swap swap-rotate cursor-pointer scale-60">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" className="" value="" />

          {/* sun icon */}
          <Sun size={20} className="swap-off h-10 w-10" />

          {/* moon icon */}
          <Moon size={20} className="swap-on h-10 w-10" />
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
