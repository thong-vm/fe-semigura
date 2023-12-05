import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "../pages/not-found/not-found";
import Moromi from "../pages/moromi/moromi";
import Dashboard from "../pages/dashboard/dashboard";
import MoromiGeneral from "../pages/moromi/moromi-general/moromi-general";
import Bmd from "../pages/moromi/bmd/bmd";
import Ekisu from "../pages/moromi/ekisu/ekisu";
function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/moromi" element={<Moromi />} />
        <Route path="/moromi/general" element={<MoromiGeneral />} />
        <Route path="/moromi/bmd" element={<Bmd />} />
        <Route path="/moromi/ekisu" element={<Ekisu />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default Main;
