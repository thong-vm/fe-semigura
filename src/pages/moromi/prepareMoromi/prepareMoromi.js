import { useDispatch, useSelector } from "react-redux";
import PageTable from "../../../components/page-table/page-table";
import {
  selectAllPrepareMoromi,
  updatePrepareMoromi,
} from "../../../store/moromi/prepareMoromiSlice";

function PrepareMoromi() {
  const dispatch = useDispatch();
  const data = useSelector(selectAllPrepareMoromi);
  const updateData = ({ id, changes }) => {
    dispatch(updatePrepareMoromi({ id, changes }));
  };
  return (
    <PageTable
      data={data}
      updateData={updateData}
      axis={{ x: "Time", y: "t°" }}
      yAxisName={"time"}
    />
  );
}

export default PrepareMoromi;
