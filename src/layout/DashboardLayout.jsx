import { Outlet } from "react-router";
import Sidebar from "../dashboard/SideBar/SideBar";
import DashboardHeader from "../dashboard/DashboardHeader/DashboardHeader";
import useSidebarToggle from "../dashboard/useSidebarToggle/useSidebarToggle";

const DashboardLayout = () => {
  const { isOpen, open, close } = useSidebarToggle();

  return (
    <div className="min-h-screen flex bg-slate-100 dark:bg-zinc-950">
      <Sidebar isOpen={isOpen} onClose={close} />

      <div className="flex-1 flex flex-col">
        <DashboardHeader onMenuClick={open} />

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
