import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-blue-500 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-white font-semibold text-xl">
                University Admissions
              </span>
            </div>
            <div className="flex items-center md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="text-white hover:text-gray-200 focus:outline-none focus:text-gray-200"
              >
                <svg
                  className="h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"
                    />
                  )}
                </svg>
              </button>
            </div>
            <div
              className={`hidden md:flex md:items-center md:w-auto ${
                isMenuOpen ? "block" : "hidden"
              }`}
            >
              <ul className="md:flex space-x-4">
                <li>
                  <Link
                    to="/"
                    className="text-white hover:text-gray-200 font-medium px-3 py-2 rounded-md"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/college"
                    className="text-white hover:text-gray-200 font-medium px-3 py-2 rounded-md"
                  >
                    Colleges
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admission"
                    className="text-white hover:text-gray-200 font-medium px-3 py-2 rounded-md"
                  >
                    Admission
                  </Link>
                </li>
                <li>
                  <Link
                    to="/myCollege"
                    className="text-white hover:text-gray-200 font-medium px-3 py-2 rounded-md"
                  >
                    My College
                  </Link>
                </li>
              </ul>
              <div className="relative ml-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-8 pr-4 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-400"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 18a9 9 0 100-18 9 9 0 000 18zM2.05 9a6.95 6.95 0 1113.9 0 6.95 6.95 0 01-13.9 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
