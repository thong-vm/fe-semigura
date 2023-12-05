import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "../pages/notFound/notFound.js";
import Moromi from "../pages/moromi/moromi";
import Dashboard from "../pages/dashboard/dashboard";
import Bmd from "../pages/moromi/bmd/bmd";
import Ekisu from "../pages/moromi/ekisu/ekisu";
import PrepareMoromi from "../pages/moromi/prepareMoromi/prepareMoromi.js";
import MoromiGeneral from "../pages/moromi/moromiGeneral/moromiGeneral.js";

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/moromi" element={<Moromi />} />
        <Route path="/moromi/prepare-moromi" element={<PrepareMoromi />} />
        <Route path="/moromi/general" element={<MoromiGeneral />} />
        <Route path="/moromi/bmd" element={<Bmd />} />
        <Route path="/moromi/ekisu" element={<Ekisu />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default Main;
