import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
