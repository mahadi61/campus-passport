import { useContext, useState } from "react";
import { FaGraduationCap, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // const text = e.target.text.value;
    // fetch(``);
  };

  return (
    <>
      <nav className="bg-[#052c65] p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FaGraduationCap className="text-4xl font-bold text-white" />
              <p className="text-white  font-semibold text-2xl">
                Campus Passport
              </p>
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
                <li>
                  {user ? (
                    <Link
                      onClick={() => logOut()}
                      className="text-white hover:text-gray-200 font-medium px-3 py-2 rounded-md"
                    >
                      Logout
                    </Link>
                  ) : (
                    <Link
                      to="/login"
                      className="text-white hover:text-gray-200 font-medium px-3 py-2 rounded-md"
                    >
                      Login
                    </Link>
                  )}
                </li>
              </ul>

              <form onSubmit={handleSearch} className="join">
                <div>
                  <div>
                    <input
                      className="input bg-white join-item pl-8 pr-4 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-400"
                      placeholder="Search..."
                      name="text"
                    />
                  </div>
                </div>

                <div className="indicator">
                  <button className="btn join-item h-full bg-[#ff7350] text-white">
                    <FaSearch></FaSearch>
                  </button>
                </div>
              </form>
              {user && (
                <div className="flex items-center">
                  <p className="text-white hover:text-gray-200 font-medium px-3 py-2 rounded-md">
                    {user?.displayName}
                  </p>
                  <Link to="/userProfile">
                    <img
                      className="w-10 h-10 object-cover rounded-full mx-3"
                      src={user?.photoURL}
                      alt=""
                    />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
