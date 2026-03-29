import React from "react";

const Navbar = ({ items }) => {
  return (
    <nav className="border-b ">
      {/* Navbar container */}
      <div className="w-full max-w-10/12 mx-auto">
        <div className="navbar bg-base-100 shadow-sm">
          {/* Navbar start */}
          <div className="navbar-start">
            <div className="dropdown">
              {/* hamburger menu for mobile view */}
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>

              {/* hamburger menu items */}
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>

            {/* Navbar brand */}
            <a className="text-xl text-semibold">DigiTools</a>
          </div>

          {/* Navbar center */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {items.map((item) => (
                <li key={item.id}>
                  <a className="capitalize">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navbar end */}
          <div className="navbar-end gap-2">
            <span>cart</span>
            <a href="#">Login</a>
            <a className="btn">Get Started</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
