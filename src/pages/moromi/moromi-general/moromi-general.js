import PageTable from "../../../components/page-table/page-table";
import { selectAllBmd, updateBmd } from "../../../store/moromi/bmdSlide";
import {
  selectAllMoromis,
  updateMoromi,
} from "../../../store/moromi/moromiSlice";

function MoromiGeneral() {
  return (
    <div>
      MoromiGeneral
      <PageTable selectAllData={selectAllMoromis} updateData={updateMoromi} />
      BMD
      <PageTable selectAllData={selectAllBmd} updateData={updateBmd} />
    </div>
  );
}

export default MoromiGeneral;
