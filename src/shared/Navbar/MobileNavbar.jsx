import { NavLink } from "react-router";
import useUserHook from "../../hooks/useUserHook";
const MobileNavbar = ({ navItems, closeMenu }) => {
  const { userloading, user, logOutUser } = useUserHook();
  const handleLogout = async () => {
    await logOutUser();
     closeMenu()
  };
  return (
    <div>
      <ul className="md:hidden flex flex-col bg-white px-6 pb-4 space-y-2 shadow-lg">
        {navItems.map((item, index) => (
          <li
            key={item.path}
            className={`border-b border-gray-300 hover:bg-gray-50`}
          >
            <NavLink
              to={item.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-600 font-semibold block py-1"
                  : "text-gray-700 hover:text-indigo-600 block py-1"
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}

        {/* Auth Buttons (Mobile) */}
        {user ? (
          <>
            <button
              onClick={handleLogout}
              className="bg-red-700 text-white py-1.5 hover:bg-red-800 cursor-pointer transition-all duration-300 ease-in-out rounded-md font-playfair"
            >
              Logout
            </button>
          </>
        ) : (
          <div className="flex flex-col space-y-2 mt-2">
            <NavLink
              to="/login"
              onClick={closeMenu}
              className="px-4 py-2 border border-indigo-600 text-black rounded hover:bg-indigo-600 hover:text-white transition-colors text-center"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              onClick={closeMenu}
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 transition-colors text-center"
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
