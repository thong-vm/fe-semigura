import { useDispatch, useSelector } from "react-redux";
import PageTable from "../../../components/PageTable/PageTable";
import {
    selectAllMoromis,
  updateMoromi,
} from "../../../store/moromi/moromiSlice";
import CollapseTab from "../../../components/CollapseTab/CollapseTab";
import ButtonGroupChart from "../../../components/Button/ButtonChartGroup";

function MoromiGeneral() {
  const dispatch = useDispatch();
  const disable = true;
  const data = useSelector(selectAllMoromis);
  const updateData = ({ id, changes }) => {
    dispatch(updateMoromi({ id, changes }));
  };
    return (
    <>
      <CollapseTab
        title="General Moromi"
        content={
          <>
          <PageTable
            data={data}
            updateData={updateData}
            axis={{ x: "Time", y: "t°" }}
            yAxisName={"dailyOrder"}
          />
          <ButtonGroupChart disableSave={disable} ></ButtonGroupChart>
          </>
        }
      ></CollapseTab>
    </>
  );
}

export default MoromiGeneral;
