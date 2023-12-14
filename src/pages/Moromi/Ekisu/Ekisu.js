import { useDispatch, useSelector } from "react-redux";
import PageTable from "../../../components/PageTable/PageTable";
import { selectAllEkisus, updateEkisu } from "../../../store/moromi/ekisuSlice";
import CollapseTab from "../../../components/CollapseTab/CollapseTab";

function Ekisu() {
  const dispatch = useDispatch();
  const data = useSelector(selectAllEkisus);
  const updateData = ({ id, changes }) => {
    dispatch(updateEkisu({ id, changes }));
  };
  return (
    <>
      <CollapseTab
        title="Ekisu"
        content={
          <PageTable
            data={data}
            updateData={updateData}
            axis={{ x: "Day", y: "t°" }}
          />
        }
      ></CollapseTab>
    </>
  );
}

export default Ekisu;
