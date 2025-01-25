import { Link } from "react-router";
import logo from "../../assets/Img/logo.png";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 ">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <figure>
            <Link to="/">
              <img src={logo} alt="Logo" className="w-[15%] cursor-pointer" />
            </Link>
          </figure>
          <h2 className="text-xl font-bold text-white mb-4">CollegeHub</h2>
          <p className="text-sm text-gray-400">
            Your trusted platform for exploring, comparing, and applying to the
            best colleges. Empowering your academic journey with ease.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-white transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Colleges"
                className="hover:text-white transition duration-300"
              >
                Colleges
              </Link>
            </li>
            <li>
              <Link
                to="/Admission"
                className="hover:text-white transition duration-300"
              >
                Admissions
              </Link>
            </li>
            <li>
              <Link
                to="/MyCollege"
                className="hover:text-white transition duration-300"
              >
                My College
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li>Email: support@collegehub.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Address: 123 College Ave, Cityville, USA</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-400 text-sm mt-8">
        © {new Date().getFullYear()} CollegeHub. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
