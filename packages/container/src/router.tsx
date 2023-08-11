import { Navigate, Route, Router, Routes } from "react-router-dom";
import Layout from "./layout";
import { lazy } from "react";

const Home = lazy(() => import("./pages/home"));
const Contact = lazy(() => import("./pages/contact"));
const Auth = lazy(() => import("./pages/auth"));

/**
 * Routes
 * @returns
 */
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="auth/*" element={<Auth />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
