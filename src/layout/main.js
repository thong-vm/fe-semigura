import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Moromi from "../pages/moromi/moromi";
import Dashboard from "../pages/dashboard/dashboard";
function Main() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/moromi" element={<Moromi />} />
    </Routes>
  );
}

export default Main;
