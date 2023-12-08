import { useDispatch, useSelector } from "react-redux";
import PageTable from "../../../components/PageTable/PageTable";
import {
  selectAllBmd,
  selectAllStandardLines,
  updateBmd,
} from "../../../store/moromi/bmdSlice";

function Bmd() {
  const dispatch = useDispatch();
  const data = useSelector(selectAllBmd);
  const standardLines = useSelector(selectAllStandardLines);
  const updateData = ({ id, changes }) => {
    dispatch(updateBmd({ id, changes }));
  };

  return (
    <PageTable
      data={data}
      standardLines={standardLines}
      updateData={updateData}
      axis={{ x: "Day", y: "t°" }}
    />
  );
}

export default Bmd;
