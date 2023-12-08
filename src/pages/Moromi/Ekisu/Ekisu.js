import { useDispatch, useSelector } from "react-redux";
import PageTable from "../../../components/PageTable/PageTable";
import { selectAllEkisus, updateEkisu } from "../../../store/moromi/ekisuSlice";

function Ekisu() {
  const dispatch = useDispatch();
  const data = useSelector(selectAllEkisus);
  const updateData = ({ id, changes }) => {
    dispatch(updateEkisu({ id, changes }));
  };
  return (
    <PageTable
      data={data}
      updateData={updateData}
      axis={{ x: "Day", y: "t°" }}
    />
  );
}

export default Ekisu;
