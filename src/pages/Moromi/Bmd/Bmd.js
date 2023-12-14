import { useDispatch, useSelector } from "react-redux";
import PageTable from "../../../components/PageTable/PageTable";
import {
  selectAllBmd,
  selectAllStandardLines,
  updateBmd,
} from "../../../store/moromi/bmdSlice";
import CollapseTab from "../../../components/CollapseTab/CollapseTab";

function Bmd() {
  const dispatch = useDispatch();
  const data = useSelector(selectAllBmd);
  const standardLines = useSelector(selectAllStandardLines);
  const updateData = ({ id, changes }) => {
    dispatch(updateBmd({ id, changes }));
  };

  return (
    <>
      <CollapseTab
        title="BMD"
        content={
          <PageTable
            data={data}
            standardLines={standardLines}
            updateData={updateData}
            axis={{ x: "Day", y: "t°" }}
          />
        }
      ></CollapseTab>
    </>
  );
}

export default Bmd;
