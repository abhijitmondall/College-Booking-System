import { Link, NavLink } from "react-router";
import logo from "./../../assets/Img/logo.png";
import { HiOutlineSearch } from "react-icons/hi";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-gradient-to-r from-purple-700 to-purple-500 shadow-md">
      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="flex flex-wrap justify-between items-center py-4">
          {/* Logo Section */}
          <figure className="flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt="Logo"
                className="w-12 md:w-16 cursor-pointer"
              />
              <h2 className="text-xl md:text-2xl font-bold text-white">
                CollegeHub
              </h2>
            </Link>
          </figure>

          {/* Search Bar */}
          <div className="w-full md:w-1/3 mt-4 md:mt-0">
            <form className="flex items-center justify-center">
              <input
                type="text"
                placeholder="Search College By Name"
                className="font-bold text-sm text-gray-800 bg-white border border-gray-300 py-2 px-5 rounded-full w-[90%] focus:w-[100%] focus:outline-none transition-all duration-200 focus:bg-[#f0eeee]"
              />
              <button
                type="button"
                className="ml-[-36px] bg-transparent focus:outline-none"
              >
                <HiOutlineSearch className="text-gray-600 w-6 h-6" />
              </button>
            </form>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden flex items-center absolute top-[16px] right-[20px]">
            <button onClick={toggleMenu}>
              <span className="text-white text-2xl">{isOpen ? "X" : "☰"}</span>
            </button>
          </div>

          {/* Navigation */}
          <nav
            className={`w-full md:w-auto ${
              isOpen ? "block" : "hidden"
            } md:block`}
          >
            <ul
              className={`flex ${
                isOpen ? "flex-col" : "flex-row"
              } gap-6 text-sm md:text-base font-medium text-white justify-center md:justify-end`}
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-400 underline"
                      : "hover:text-orange-400"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Colleges"
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-400 underline"
                      : "hover:text-orange-400"
                  }
                >
                  Colleges
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Admission"
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-400 underline"
                      : "hover:text-orange-400"
                  }
                >
                  Admission
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/MyCollege"
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-400 underline"
                      : "hover:text-orange-400"
                  }
                >
                  My College
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Login"
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-400 underline"
                      : "hover:text-orange-400"
                  }
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
