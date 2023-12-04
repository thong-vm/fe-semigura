import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Moromi from "../pages/moromi/moromi";
import Dashboard from "../pages/dashboard/dashboard";
import NotFound from "../pages/not-found/not-found";
function Main() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/moromi/*" element={<Moromi />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default Main;
