import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout";
import Signin from "./pages/sign-in";
import Signup from "./pages/sign-up";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Navigate to="auth" replace />} />
        <Route path="auth">
          <Route index element={<Signin />} />
          <Route path="/auth/signup" element={<Signup />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
