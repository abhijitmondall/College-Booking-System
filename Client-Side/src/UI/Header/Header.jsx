import { Link, NavLink } from "react-router";
import logo from "./../../assets/Img/logo.png";
import { HiOutlineSearch } from "react-icons/hi";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [collegeName, setCollegeName] = useState("");
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = async () => {
    await logout();

    navigate("/Login", { state: true });
  };

  const handleApplyClick = (id) => {};

  useEffect(() => {
    setLoading(true);
    const fetchAppliedColleges = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:3000/api/v1/colleges?text[search]=${collegeName}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access-token")}`,
            },
          }
        );
        const data = await response.json();
        console.log(data, collegeName);
        setColleges(data.colleges);
      } catch (error) {
        setError(error.message);
        console.error("Failed to fetch applied colleges:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppliedColleges();
  }, [collegeName]);

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
                onChange={(e) => setCollegeName(e.target.value)}
                value={collegeName}
                className="font-bold text-sm text-gray-800 bg-white border border-gray-300 py-2 px-5 rounded-full w-[90%] focus:w-[100%] focus:outline-none transition-all duration-200 focus:bg-[#f0eeee]"
              />
              <button
                type="button"
                className="ml-[-36px] bg-transparent focus:outline-none"
              >
                <HiOutlineSearch className="text-gray-600 w-6 h-6" />
              </button>
            </form>

            {/* Show Search Result */}
            {colleges?.length > 0 && (
              <div className="">
                <div className="">
                  <h2 className="text-3xl font-bold text-center mb-8 text-purple-700">
                    College Admissions
                  </h2>
                  <ul className=" grid grid-cols-1 gap-6">
                    {colleges.map((college) => (
                      <li
                        key={college._id}
                        className="sm:flex justify-between items-center p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-all"
                      >
                        <h3 className="text-lg font-bold text-gray-800 mb-4">
                          {college.collegeName}
                        </h3>
                        <button
                          onClick={() => handleApplyClick(college)}
                          className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-all cursor-pointer"
                        >
                          Apply Now
                        </button>
                      </li>
                    ))}
                  </ul>

                  {/* Modal */}
                  {/* {showModal && (
                    <div className="absolute inset-0 z-50 flex items-center justify-center bg-white bg-opacity-50">
                      <div className="bg-white w-full max-w-3xl rounded-lg shadow-lg p-8 relative">
                        <button
                          onClick={handleCloseModal}
                          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 cursor-pointer"
                        >
                          ✕
                        </button>
                        <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">
                          Admission Form - {selectedCollege.collegeName}
                        </h2>
                        <AdmissionForm
                          college={selectedCollege}
                          onClose={handleCloseModal}
                        />
                      </div>
                    </div>
                  )} */}
                </div>
              </div>
            )}
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
              className={`flex items-center ${
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
                {user ? (
                  <>
                    <div className="flex items-center gap-[16px]">
                      <button
                        className="cursor-pointer border-2 px-[20px] py-[10px] rounded-[10px]"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>

                      {/* <p className="text-[26px] text-black">
                        {user.displayName}
                      </p> */}
                    </div>
                  </>
                ) : (
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
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
