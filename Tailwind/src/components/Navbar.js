import React, { useState } from "react";
import logo5 from "../img/logo5.jpeg";
import { useContext } from "react";
import { Context } from "../context/Context";

import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Navbar.css";
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };
  const { user, dispatch } = useContext(Context);
  const location = useLocation();
  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };
  return (
    <>
      <div>
        <nav className="nav-links bg-white border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-800">
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <div className="flex items-center">
              <img
                src={logo5}
                className="mr-3 h-6 sm:h-9 rounded-xl flex items-center"
                alt="Flowbite Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Blogsium
              </span>
            </div>
            <button
              onClick={handleToggle}
              data-collapse-toggle="mobile-menu"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              {navbarOpen ? (
                <CloseIcon
                  style={{ color: "#fff", width: "30px", height: "30px" }}
                />
              ) : (
                <MenuIcon
                  style={{ color: "#7b7b7b", width: "30px", height: "30px" }}
                />
              )}
              <span className="sr-only">Open main menu</span>
              <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                <li>
                  <Link
                    to="/"
                    className={(navData) =>
                      navData.isActive ? "active-style" : "none"
                    }
                    onClick={() => closeMenu()}
                    exact
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/create"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-yellow-100 hover:bg-yellow-500 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    {user && <li className="listItem">Create</li>}
                  </Link>
                </li>
                {user ? (
                  <li>
                    <Link
                      to="/blogs"
                      className="block py-2 pr-4 pl-3 text-gray-700 border-b border-yellow-100 hover:bg-yellow-500 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Blogs
                    </Link>
                  </li>
                ) : (
                  <>
                    <li>
                      <Link
                        to="/login"
                        className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/signup"
                        className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        Signup
                      </Link>
                    </li>
                  </>
                )}
                <Link
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  to=""
                >
                  {user && <li onClick={handleLogout}>Logout</li>}
                </Link>
              </ul>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
              <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                <li>
                  <Link
                    to="/"
                    className="block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent md:text-yellow-400 md:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>

                <li className="ml-20">
                  <Link
                    to="/create"
                    className="block py-2  pr-4 pl-3 text-gray-700 border-b border-yellow-100 hover:bg-yellow-500 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    {user && <li className="listItem">Create Blog</li>}
                  </Link>
                </li>

                {user ? (
                  <li>
                    <Link
                      to="/blogs"
                      className="block py-2 pr-4 pl-3 text-gray-700 border-b border-yellow-100 hover:bg-yellow-500 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Blogs
                    </Link>
                  </li>
                ) : (
                  <>
                    <li>
                      <Link
                        to="/login"
                        className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/signup"
                        className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        Signup
                      </Link>
                    </li>
                  </>
                )}

                <Link
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  to=""
                >
                  {user && <li onClick={handleLogout}>Logout</li>}
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
