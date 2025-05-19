import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-300 py-4 px-6 flex justify-center space-x-8">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-gray-800 hover:text-green-500 ${
            isActive ? "font-bold text-green-500" : ""
          }`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          `text-gray-800 hover:text-green-500 ${
            isActive ? "font-bold text-green-500" : ""
          }`
        }
      >
        About
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `text-gray-800 hover:text-green-500 ${
            isActive ? "font-bold text-green-500" : ""
          }`
        }
      >
        Contact
      </NavLink>

      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          `text-gray-800 hover:text-green-500 ${
            isActive ? "font-bold text-green-500" : ""
          }`
        }
      >
        Dashboard
      </NavLink>
    </nav>
  );
}

export default Navbar;
