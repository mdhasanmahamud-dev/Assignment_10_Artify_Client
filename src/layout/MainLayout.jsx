import { Outlet } from "react-router";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
import ToastProvider from "../components/ToastProvider";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-100 dark:bg-zinc-950">
      <Navbar />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
      <ToastProvider />
    </div>
  );
};

export default MainLayout;
