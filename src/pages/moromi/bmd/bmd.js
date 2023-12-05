import { useDispatch, useSelector } from "react-redux";
import PageTable from "../../../components/page-table/page-table";
import { selectAllBmd, updateBmd } from "../../../store/moromi/bmdSlice";

function Bmd() {
  const dispatch = useDispatch();
  const data = useSelector(selectAllBmd);
  const updateData = ({ id, changes }) => {
    dispatch(updateBmd({ id, changes }));
  };

  return <PageTable data={data} updateData={updateData} />;
}

export default Bmd;
