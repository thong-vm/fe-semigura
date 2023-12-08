import Layout from "../layouts/Layout/Layout";
import Login from "../pages/Login/Login";

export const login = {
  id: "login",
  path: "/login",
  element: <Login />,
};

export const layoutMain = {
  id: "layoutMain",
  path: "/*",
  element: <Layout />,
};
