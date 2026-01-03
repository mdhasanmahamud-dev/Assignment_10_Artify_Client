import { FaBars } from "react-icons/fa";

const DashboardHeader = ({ onMenuClick }) => {
  return (
    <header className="md:hidden h-14 flex items-center px-4 bg-white dark:bg-zinc-900">
      <button
        onClick={onMenuClick}
        className="text-2xl"
        aria-label="Open sidebar"
      >
        <FaBars />
      </button>
      <h1 className="ml-4 font-semibold">Dashboard</h1>
    </header>
  );
};

export default DashboardHeader;
