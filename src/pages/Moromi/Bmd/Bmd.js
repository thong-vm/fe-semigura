import { useDispatch, useSelector } from "react-redux";
import PageTable from "../../../components/PageTable/PageTable";
import {
  selectAllBmd,
  selectAllStandardLines,
  updateBmd,
} from "../../../store/moromi/bmdSlice";
import CollapseTab from "../../../components/CollapseTab/CollapseTab";
import { useTranslation } from "react-i18next";

function Bmd() {
  const {t} = useTranslation("menu");
  const dispatch = useDispatch();
  const data = useSelector(selectAllBmd);
  const standardLines = useSelector(selectAllStandardLines);
  const updateData = ({ id, changes }) => {
    dispatch(updateBmd({ id, changes }));
  };

  return (
    <>
      <CollapseTab
        title={t ("BMD")}
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
