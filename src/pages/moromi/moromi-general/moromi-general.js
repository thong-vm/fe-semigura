import PageTable from "../../../components/page-table/page-table";
import {
  selectAllMoromis,
  updateMoromi,
} from "../../../store/moromi/moromiSlice";

function MoromiGeneral() {
  return (
    <div>
      MoromiGeneral
      <PageTable selectAllData={selectAllMoromis} updateData={updateMoromi} />
      <PageTable selectAllData={selectAllMoromis} updateData={updateMoromi} />
    </div>
  );
}

export default MoromiGeneral;
