import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import classes from "./Layout.module.css";
import Sidebar from "../../components/Sidebar/Sidebar.js";
import * as ROUTES from "../../constants/routes.js";
import * as COLORS from "../../constants/colors";
import Header from "../../components/Header/Header.js";
function Layout() {
  /* The code is creating an array of `Route` components based on the values of the `ROUTES` object. */
  const routeComponents = Object.values(ROUTES).map((route) => (
    <Route key={route.id} path={route.path} element={route.element} />
  ));
  return (
    /* The code is creating the layout structure for a web application using React Router. */
    <Router>
      <div className={classes.root}>
        <div
          style={{ backgroundColor: COLORS.sidebarPrimary }}
          className={classes.menu}
        >
          <Sidebar />
        </div>
        <div className={classes.main}>
          <div className={classes.header}>
            <Header />
          </div>
          <div className={classes.content}>
            <Routes>{routeComponents}</Routes>
          </div>
          <div className={classes.footer}>footer</div>
        </div>
      </div>
    </Router>
  );
}

export default Layout;
