import { useDispatch, useSelector } from "react-redux";
import PageTable from "../../../components/PageTable/PageTable";
import {
  selectAllArukoru,
  updateArukoru,
} from "../../../store/moromi/arukoruSlice";
import CollapseTab from "../../../components/CollapseTab/CollapseTab";
import { useTranslation } from "react-i18next";

function Arukoru() {
  const { t } = useTranslation("menu");
  const dispatch = useDispatch();
  const data = useSelector(selectAllArukoru);
  const updateData = ({ id, changes }) => {
    dispatch(updateArukoru({ id, changes }));
  };
  return (
    <>
      <CollapseTab
        title={t("ARUKORU")}
        content={
          <PageTable
            data={data}
            updateData={updateData}
            axis={{ x: "Day", y: "t°" }}
          />
        }
      ></CollapseTab>
    </>
    // <PageTable data={data} updateData={updateData} axis={{ x: "Day", y: "" }} />
  );
}

export default Arukoru;
