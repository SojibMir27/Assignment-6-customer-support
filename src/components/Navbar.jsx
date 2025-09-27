import React from "react";

const Navbar = () => {
  return (
    <>
      <>
        <footer className="navbar bg-base-100 px-3 shadow-sm flex justify-between">
          <div className="navbar-start">
            <div className="dropdown">
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
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li className="font-bold">
                  <a>Home</a>
                  <a>FAQ</a>
                  <a>Changelog</a>
                  <a>Blog</a>
                  <a>Download</a>
                  <a>Contact</a>
                </li>
              </ul>
            </div>
            <a className="md:ml-5 font-bold text-sm md:text-xl text-[#130b2d] cursor-pointer">
              CS — Ticket System
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li className="flex flex-row items-center justify-center font-medium">
                <a>Home</a>
                <a>FAQ</a>
                <a>Changelog</a>
                <a>Blog</a>
                <a>Download</a>
                <a>Contact</a>
                <a className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] font-bold text-white">
                  + New Ticket
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </>
    </>
  );
};

export default Navbar;
