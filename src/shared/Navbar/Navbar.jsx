import { NavLink } from "react-router";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import MobileNavbar from "./MobileNavbar";
import useUserHook from "../../hooks/useUserHook";
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
  const { userloading, user } = useUserHook();
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

        <div className="hidden md:flex">
          {user ? (
            <div className="relative group">
              <img
                src={user.photoURL}
                alt={user.displayName}
                className="w-10 h-10 rounded-full cursor-pointer"
              />
              <div className="absolute top-full mt-2 right-0 bg-gray-800 text-white text-sm rounded shadow-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <p>{user.displayName}</p>
                <button
                  onClick={() => console.log("Helle")}
                  className="mt-1 bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Auth Buttons */}
              <div className=" items-center space-x-3">
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
            </>
          )}
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
        <MobileNavbar navItems={navItems} closeMenu={closeMenu} />
      )}
    </header>
  );
};

export default Navbar;
