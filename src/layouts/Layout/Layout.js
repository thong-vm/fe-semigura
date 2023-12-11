import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import classes from "./Layout.module.css";
import Menu from "../../components/Menu/Menu.js";
import * as ROUTES from "../../constants/routes.js";
import * as COLORS from "../../constants/colors";
import Header from "../../components/Header/Header.js";
import { useEffect } from "react";
import LocalStorage from "../../services/localStorage/localStorage.js";
import { useState } from "react";
import Footer from "../../components/Footer/Footer.js";
function Layout() {
  const navigate = useNavigate();
  const [isTokenValid, setTokenValid] = useState(false);
  const token = LocalStorage.get("token");
  const isTokenExpired = (token) => {
    return !token || token === "";
  };
  const routeComponents = Object.values(ROUTES).map((route) => (
    <Route key={route.id} path={route.path} element={route.element} />
  ));
  useEffect(() => {
    const checkToken = async () => {
      if (isTokenExpired(await token)) {
        navigate(ROUTES.logOut.path);
      } else {
        setTokenValid(true);
      }
    };

    checkToken();
  }, [navigate, token]);

  return (
    <>
      {isTokenValid && (
        <div className={classes.root}>
          <div
            style={{ backgroundColor: COLORS.sidebarPrimary }}
            className={classes.menu}
          >
            <Menu />
          </div>
          <div className={classes.main}>
            <div className={classes.header}>
              <Header />
            </div>
            <div className={classes.content}>
              <Routes>{routeComponents} </Routes>
            </div>
            <div className={classes.footer}>
              <Footer />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Layout;
