import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Appbar from "./Appbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Appbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
