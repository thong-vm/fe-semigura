import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sensor from "../pages/sensor";
function Main() {
  return (
    <Routes>
      <Route path="/" element={<Sensor />} />
      <Route path="/sensor" element={<Sensor />} />
    </Routes>
  );
}

export default Main;
