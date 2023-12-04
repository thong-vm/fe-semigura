import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageTable from "../../components/page-table/page-table";
import MoromiGeneral from "./moromi-general/moromi-general";
import { selectAllMoromis, updateMoromi } from "../../store/moromi/moromiSlice";
import NotFound from "../not-found/not-found";
function Moromi() {
  return (
    <Routes>
      <Route path="/*" element={<NotFound />} />
      <Route path="/" element={<MoromiGeneral />} />
      <Route
        path="/table1"
        element={
          <PageTable
            selectAllData={selectAllMoromis}
            updateData={updateMoromi}
          />
        }
      />
      <Route
        path="/table2"
        element={
          <PageTable
            selectAllData={selectAllMoromis}
            updateData={updateMoromi}
          />
        }
      />
    </Routes>
  );
}

export default Moromi;
