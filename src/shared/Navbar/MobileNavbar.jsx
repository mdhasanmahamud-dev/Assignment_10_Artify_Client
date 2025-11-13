import { NavLink } from "react-router";
import useUserHook from "../../hooks/useUserHook";

const MobileNavbar = ({ navItems, closeMenu }) => {
  const { userloading, user, logOutUser } = useUserHook();

  const handleLogout = async () => {
    await logOutUser();
    closeMenu();
  };

  return (
    <div>
      <ul className="md:hidden flex flex-col bg-gray-50 dark:bg-zinc-900 px-6 pb-4 space-y-2 shadow-lg dark:shadow-none transition-colors">
        {navItems.map((item, index) => (
          <li
            key={item.path}
            className="border-b border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <NavLink
              to={item.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-600 dark:text-indigo-400 font-semibold block py-2"
                  : "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 block py-2"
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}

        {/* Auth Buttons (Mobile) */}
        {user ? (
          <button
            onClick={handleLogout}
            className="bg-red-700 dark:bg-red-600 text-white py-2 hover:bg-red-800 dark:hover:bg-red-700 cursor-pointer transition-all duration-300 ease-in-out rounded-md font-playfair mt-2"
          >
            Logout
          </button>
        ) : (
          <div className="flex flex-col space-y-2 mt-2">
            <NavLink
              to="/login"
              onClick={closeMenu}
              className="px-4 py-2 border border-indigo-600 text-black dark:text-white rounded hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 transition-colors text-center"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              onClick={closeMenu}
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 dark:hover:bg-indigo-500 transition-colors text-center"
            >
              Register
            </NavLink>
          </div>
        )}
      </ul>
    </div>
  );
};

export default MobileNavbar;
