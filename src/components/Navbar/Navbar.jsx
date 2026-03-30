import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Moon, Sun, ShoppingCart } from "lucide-react";

const Navbar = ({ items }) => {
  const [activeLink, setactiveLink] = useState(
    localStorage.getItem("activeLink") || "home",
  );

  useEffect(() => localStorage.setItem("activeLink", activeLink), [activeLink]);

  return (
    <nav className="w-full sticky top-0 z-10 shadow-md">
      {/* Navbar container */}
      <div className="w-full py-1 max-w-11/12 mx-auto flex items-center justify-center gap-2">
        {/* Navbar content */}
        <div className="navbar bg-base-100">
          {/* Navbar start */}
          <div className="navbar-start">
            <div className="dropdown">
              {/* hamburger menu for mobile view */}
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden p-2 rounded-lg"
              >
                <Menu size={20} />
              </div>

              {/* hamburger menu items */}
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {items.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={item.path}
                      className={`link hover:bg-transparent no-underline text-base font-semibold capitalize bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text hover:text-transparent transition duration-300 ${activeLink === item.label ? "text-transparent" : ""}`}
                      onClick={() => setactiveLink(item.label)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navbar brand */}
            <a className="text-3xl font-semibold bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent hidden md:inline-block">
              DigiTools
            </a>
          </div>

          {/* Navbar center */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {items.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className={`link hover:bg-transparent no-underline text-base font-semibold capitalize bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text hover:text-transparent transition duration-300 ${activeLink === item.label ? "text-transparent" : ""}`}
                    onClick={() => setactiveLink(item.label)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navbar end */}
          <div className="navbar-end gap-4">
            {/* Shopping cart */}
            <ShoppingCart size={20} className="cursor-pointer" />

            {/* Login link */}
            <a href="#" className="text-sm font-semibold select-none">
              Login
            </a>

            {/* Get Started button */}
            <a className="btn hidden md:inline-flex bg-linear-to-r from-blue-500 to-purple-500 text-slate-50 rounded-3xl px-4 py-0">
              Get Started
            </a>
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
