import { NavLink } from "react-router";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import MobileNavbar from "./MobileNavbar";
const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Explore Artworks", path: "/explore-artworks" },
    { name: "Add Artwork", path: "/add-artwork" },
    { name: "My Gallery", path: "/my-gallery" },
    { name: "My Favorites", path: "/my-favorites" },
  ];

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const closeMenu = () => setShowMobileMenu(false);

  return (
    <header className="bg-white  sticky top-0 z-50 border-b">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold text-indigo-600">
          Artify
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-4 text-gray-700">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-600 font-semibold border-b-2 pb-1 transition-all ease-in-out duration-00"
                    : "hover:text-indigo-600 transition-colors"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <NavLink
            to="/login"
            className="px-4 py-2 border border-indigo-600 text-black hover:text-white rounded hover:bg-indigo-600 transition-colors"
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 transition-colors"
          >
            Register
          </NavLink>
        </div>

        {/* Mobile Menu Icon Toggle*/}
        <div className="md:hidden">
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="text-2xl text-gray-800 focus:outline-none cursor-pointer"
          >
            {showMobileMenu ? <RxCross2 /> : <CiMenuFries />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {showMobileMenu && (
        <MobileNavbar
          navItems={navItems}
          closeMenu={closeMenu}
        />
      )}
    </header>
  );
};

export default Navbar;
