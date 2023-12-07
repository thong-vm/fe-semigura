import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "../pages/notFound/notFound.js";
import Moromi from "../pages/moromi/moromi.js";
import Dashboard from "../pages/dashboard/dashboard.js";
import Bmd from "../pages/moromi/bmd/bmd.js";
import Ekisu from "../pages/moromi/ekisu/ekisu.js";
import Arukoru from "../pages/moromi/arukoru/arukoru.js";
import PrepareMoromi from "../pages/moromi/prepareMoromi/prepareMoromi.js";
import MoromiGeneral from "../pages/moromi/moromiGeneral/moromiGeneral.js";
import Sidebar from "../components/sidebar/Sidebar.js";
import classes from "./Layout.module.css";
function Layout() {
  return (
    <Router>
      <div className={classes.root}>
        <div className={classes.menu}>
          <Sidebar />
        </div>

        <div className={classes.main}>
          <div className={classes.header}>header</div>
          <div className={classes.content}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/moromi" element={<Moromi />} />
              <Route
                path="/moromi/prepare-moromi"
                element={<PrepareMoromi />}
              />
              <Route path="/moromi/general" element={<MoromiGeneral />} />
              <Route path="/moromi/bmd" element={<Bmd />} />
              <Route path="/moromi/arukoru" element={<Arukoru />} />
              <Route path="/moromi/ekisu" element={<Ekisu />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </div>
          <div className={classes.footer}>footer</div>
        </div>
      </div>
    </Router>
  );
}

export default Layout;
