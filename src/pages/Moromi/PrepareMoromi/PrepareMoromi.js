import { useDispatch, useSelector } from "react-redux";
import PageTable from "../../../components/PageTable/PageTable";
import {
  selectAllPrepareMoromi,
  updatePrepareMoromi,
} from "../../../store/moromi/prepareMoromiSlice";
import CollapseTab from "../../../components/CollapseTab/CollapseTab";
import ButtonGroupChart from "../../../components/Button/ButtonChartGroup";
import { useTranslation } from "react-i18next";

function PrepareMoromi() {
  const { t } = useTranslation("menu");
  const dispatch = useDispatch();
  const data = useSelector(selectAllPrepareMoromi);
  const disable = true;
  const updateData = ({ id, changes }) => {
    dispatch(updatePrepareMoromi({ id, changes }));
  };
  return (
    <>
      <CollapseTab
        title={t("PREPARE_MOROMI")}
        content={
          <>
            <PageTable
              data={data}
              updateData={updateData}
              axis={{ x: "Time", y: "t°" }}
              yAxisName={"time"}
            />
            <ButtonGroupChart disableSave={disable}></ButtonGroupChart>
          </>
        }
      ></CollapseTab>
    </>
  );
}

export default PrepareMoromi;
