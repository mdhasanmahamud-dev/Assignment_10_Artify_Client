import { NavLink } from "react-router";
import { CiLight, CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import MobileNavbar from "./MobileNavbar";
import useUserHook from "../../hooks/useUserHook";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Explore Artworks", path: "/explore-artworks" },
    { name: "About", path: "/about" },
  ];

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const closeMenu = () => setShowMobileMenu(false);
  const { userloading, user, logOutUser } = useUserHook();

  const handleLogout = async () => {
    await logOutUser();
  };

  const handleToggle = () => {
    const newToggle = !toggle;
    setToggle(newToggle);
    const html = document.querySelector("html");
    if (newToggle) {
      html.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      html.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header className="bg-gray-50 dark:bg-zinc-900 sticky top-0 z-50 shadow-sm dark:shadow-none transition-colors">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold text-indigo-600 dark:text-indigo-400"
        >
          Artify
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-4 text-gray-700 dark:text-gray-300">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-600 dark:text-indigo-400 font-semibold border-b-2 pb-1 transition-all duration-200"
                    : "hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* User Section */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={handleToggle}
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors duration-300 cursor-pointer"
          >
            <CiLight
              className={`text-2xl ${
                theme === "light" ? "text-black" : "text-white"
              }`}
            />
          </button>

          {user ? (
            <div className="relative">
              <img
                src={user.photoURL}
                alt={user.displayName}
                id="user-img"
                className="w-10 h-10 rounded-full cursor-pointer"
              />
              <Tooltip
                anchorId="user-img"
                place="bottom-end"
                clickable
                className="!bg-zinc-900 !p-0 rounded-xl shadow-lg border border-zinc-700"
              >
                <div className="w-42 text-sm">
                  {/* User Info */}
                  <div className="px-4 py-3 border-b border-zinc-700">
                    <p className="font-semibold text-white truncate">
                      {user?.displayName}
                    </p>
                    <p className="text-xs text-zinc-400 truncate">
                      {user?.email}
                    </p>
                  </div>

                  {/* Menu */}
                  <div className="py-2">
                    <NavLink
                      to="/dashboard"
                      className="block text-center px-4 py-2 text-zinc-200 hover:bg-zinc-800 transition"
                    >
                      Dashboard
                    </NavLink>
                  </div>

                  {/* Logout */}
                  <div className="px-4 py-3 border-t border-zinc-700">
                    <button
                      onClick={handleLogout}
                      className="w-full text-center cursor-pointer text-red-500 hover:text-red-600 font-medium transition"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </Tooltip>
            </div>
          ) : (
            <>
              <NavLink
                to="/login"
                className="px-4 py-2 border border-indigo-600 text-black dark:text-white hover:text-white rounded hover:bg-indigo-600 transition-colors"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 transition-colors"
              >
                Register
              </NavLink>
            </>
          )}
        </div>

        {/* Mobile Menu Icon Toggle */}
        <div className="md:hidden flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={handleToggle}
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors duration-300 cursor-pointer"
          >
            <CiLight
              className={`text-2xl ${
                theme === "light" ? "text-black" : "text-white"
              }`}
            />
          </button>

          {/* User Image */}
          {user && (
            <img
              src={user.photoURL}
              title={user.displayName}
              alt={user.displayName}
              className="w-8 h-8 rounded-full cursor-pointer"
            />
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="text-2xl text-gray-800 dark:text-gray-200 focus:outline-none cursor-pointer"
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
