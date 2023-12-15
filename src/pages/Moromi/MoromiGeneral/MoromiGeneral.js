import { useDispatch, useSelector } from "react-redux";
import PageTable from "../../../components/PageTable/PageTable";
import {
  selectAllMoromis,
  setList,
  updateMoromi,
} from "../../../store/moromi/moromiSlice";
import CollapseTab from "../../../components/CollapseTab/CollapseTab";
import ButtonGroupChart from "../../../components/Button/ButtonChartGroup";
import { useEffect, useState } from "react";
import { Notify } from "../../../components/Common/Notify";
import { Batch } from "../../../services/api/batch/batchApi";

function MoromiGeneral() {
  const dispatch = useDispatch();
  const disable = true;
  const data = useSelector(selectAllMoromis);
  const updateData = ({ id, changes }) => {
    dispatch(updateMoromi({ id, changes }));
  };
  const [msg, setMsg] = useState();
  useEffect(() => {
    // const loader = async () => {
    //   const { result, error } = await Batch.getOne("107260938eac4000018b952c64dfd0cb");
    //   if (error) {
    //     setMsg(error);
    //   } else {

    //     dispatch(setList({ moromis: result.moromis }));
    //   }
    // };
    // if (!data) {
    //   loader();
    // }
  }, [data, dispatch]);

  return (
    <>
      <Notify error={msg} onOk={setMsg}></Notify>
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
            <ButtonGroupChart disableSave={disable}></ButtonGroupChart>
          </>
        }
      ></CollapseTab>
    </>
  );
}

export default MoromiGeneral;
