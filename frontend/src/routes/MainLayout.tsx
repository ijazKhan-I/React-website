import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="flex-grow flex flex-col items-center text-center px-6 space-y-12">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;