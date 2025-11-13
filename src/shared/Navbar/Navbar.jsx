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
    { name: "Add Artwork", path: "/add-artwork" },
    { name: "My Gallery", path: "/my-gallery" },
    { name: "My Favorites", path: "/my-favorites" },
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
    <header className="bg-white sticky top-0 z-50">
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

        {/* User Section */}
        <div className="hidden md:flex items-center">
          {user ? (
            <div className="flex items-center gap-3 relative">
              {/* Light Icon */}
              <button
                onClick={handleToggle}
                className="p-2 bg-linear-to-r from-gray-500 to-gray-700 rounded-full  transition-colors duration-300"
              >
                <CiLight
                  className={`text-2xl ${
                    theme === "light" ? "text-black" : "text-white"
                  }`}
                />
              </button>

              {/* User Image */}
              <div className="relative">
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  id="user-img"
                  className="w-10 h-10 rounded-full cursor-pointer"
                />

                <Tooltip
                  anchorId="user-img"
                  place="bottom"
                  clickable={true}
                  className="bg-zinc-800! p-3! rounded!"
                >
                  <div className="flex flex-col items-start">
                    <p className="font-semibold text-white">
                      {user.displayName}
                    </p>
                    <button
                      onClick={handleLogout}
                      className=" bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md text-white w-full cursor-pointer"
                    >
                      Logout
                    </button>
                  </div>
                </Tooltip>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              {/* Light Icon */}
              <button
                onClick={handleToggle}
                className="p-2 bg-linear-to-r from-gray-500 to-gray-700 rounded-full  transition-colors duration-300"
              >
                <CiLight
                  className={`text-2xl ${
                    theme === "light" ? "text-black" : "text-white"
                  }`}
                />
              </button>

              {/* Login / Register */}
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
          )}
        </div>

        {/* Mobile Menu Icon Toggle */}
        <div className="md:hidden">
          <div className="flex items-center gap-4">
            <button
              onClick={handleToggle}
              className="p-2 bg-linear-to-r from-gray-500 to-gray-700 rounded-full  transition-colors duration-300"
            >
              <CiLight
                className={`text-2xl ${
                  theme === "light" ? "text-black" : "text-white"
                }`}
              />
            </button>

            {user && (
              <img
                src={user?.photoURL}
                title={user?.displayName}
                alt={user?.displayName}
                className="w-8 h-8 rounded-full cursor-pointer"
              />
            )}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="text-2xl text-gray-800 focus:outline-none cursor-pointer"
            >
              {showMobileMenu ? <RxCross2 /> : <CiMenuFries />}
            </button>
          </div>
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
