import { useDispatch, useSelector } from "react-redux";
import PageTable from "../../../components/page-table/page-table";
import {
  selectAllMoromis,
  updateMoromi,
} from "../../../store/moromi/moromiSlice";

function MoromiGeneral() {
  const dispatch = useDispatch();
  const data = useSelector(selectAllMoromis);
  const updateData = ({ id, changes }) => {
    dispatch(updateMoromi({ id, changes }));
  };
  return <PageTable data={data} updateData={updateData} />;
}

export default MoromiGeneral;
