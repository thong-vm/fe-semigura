import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Moromi from "../pages/moromi/moromi";
function Main() {
  return (
    <Routes>
      <Route path="/" element={<Moromi />} />
      <Route path="/moromi" element={<Moromi />} />
    </Routes>
  );
}

export default Main;
