import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "../pages/not-found/not-found";
import MoromiGeneral from "../pages/moromi/moromi-general/moromi-general";
import PageTable from "../components/page-table/page-table";
import { selectAllMoromis, updateMoromi } from "../store/moromi/moromiSlice";
import { selectAllBmd, updateBmd } from "../store/moromi/bmdSlide";
import Dashboard from "../pages/dashboard/dashboard";
function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/moromi" element={<MoromiGeneral />} />
        <Route
          path="/moromi/general"
          element={
            <PageTable
              selectAllData={selectAllMoromis}
              updateData={updateMoromi}
            />
          }
        />
        <Route
          path="/moromi/bmd"
          element={
            <PageTable selectAllData={selectAllBmd} updateData={updateBmd} />
          }
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default Main;
