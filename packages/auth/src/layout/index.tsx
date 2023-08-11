import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/auth/signup">Signup</Link>
        </li>
      </ul>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
