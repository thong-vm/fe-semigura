import { useDispatch, useSelector } from "react-redux";
import PageTable from "../../../components/PageTable/PageTable";
import {
  selectAllMoromis,
  updateMoromi,
} from "../../../store/moromi/moromiSlice";
import CollapseTab from "../../../components/CollapseTab/CollapseTab";

function MoromiGeneral() {
  const dispatch = useDispatch();
  const data = useSelector(selectAllMoromis);
  const updateData = ({ id, changes }) => {
    dispatch(updateMoromi({ id, changes }));
  };
  return (
    <>
      <CollapseTab
        title="General Moromi"
        content={
          <PageTable
            data={data}
            updateData={updateData}
            axis={{ x: "Time", y: "t°" }}
            yAxisName={"time"}
          />
        }
      ></CollapseTab>
    </>
  );
}

export default MoromiGeneral;
