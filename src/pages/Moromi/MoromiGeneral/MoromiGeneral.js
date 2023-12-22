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
import { useTranslation } from "react-i18next";

function MoromiGeneral({ patchId }) {
  console.log("data patchId", patchId);
  const { t } = useTranslation("menu");
  const dispatch = useDispatch();
  const disable = true;
  const data = useSelector(selectAllMoromis);
  const [newPatchId, setNewPatchId] = useState("");
  const updateData = ({ id, changes }) => {
    dispatch(updateMoromi({ id, changes }));
  };
  const [msg, setMsg] = useState();
  useEffect(() => {
    const loader = async () => {
      const { result, error } = await Batch.getOne(patchId);
      if (error) {
        setMsg(error);
      } else {
        setNewPatchId(patchId);
        const moromis = result.moromis
          .filter((x) => parseInt(x.dailyOrder) >= 2)
          .map((x) => {
            return {
              dailyOrder: x.dailyOrder,
              time: x.time,
              roomTemperature: x.roomTemperature,
              productTemperature: x.productTemperature,
              baume: x.baume,
              japanSakeLevel: x.japanSakeLevel,
            };
          });
        dispatch(
          setList({
            moromis: moromis,
          })
        );
      }
    };
    if (newPatchId !== patchId) {
      console.log(`Data=load`);
      loader();
    }
  }, [data, newPatchId, patchId, dispatch]);

  return (
    <>
      <Notify error={msg} onOk={setMsg}></Notify>
      <CollapseTab
        title={t("MOROMI_GENERAL")}
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
