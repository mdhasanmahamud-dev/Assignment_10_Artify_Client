import { NavLink } from "react-router";
import { MdClose } from "react-icons/md";

const Sidebar = ({ isOpen, onClose }) => {
  const sidebarItems = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Add Artwork", path: "/dashboard/add-artwork" },
    { name: "My Gallery", path: "/dashboard/my-gallery" },
    { name: "My Favorites", path: "/dashboard/my-favorites" },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-30
        transition-opacity duration-300
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        md:hidden`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 z-40
        h-screen w-64 bg-gray-900 text-gray-200
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
        aria-hidden={!isOpen}
      >
        <div className="p-5">
          {/* Header */}
          <div>
            <h2 className="text-xl flex justify-center font-bold text-white">
              Artify
            </h2>
            <hr className="w-full my-4" />
          </div>

          <ul className="space-y-2">
            {sidebarItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  end
                  onClick={onClose}
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-lg text-sm font-medium
                    transition-colors duration-200
                    ${
                      isActive
                        ? "bg-indigo-600 text-white"
                        : "hover:bg-gray-800"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
