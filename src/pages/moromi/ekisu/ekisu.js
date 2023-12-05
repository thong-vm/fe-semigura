import { useDispatch, useSelector } from "react-redux";
import PageTable from "../../../components/page-table/page-table";
import { selectAllEkisus, updateEkisu } from "../../../store/moromi/ekisuSlice";

function Ekisu() {
  const dispatch = useDispatch();
  const data = useSelector(selectAllEkisus);
  const updateData = ({ id, changes }) => {
    dispatch(updateEkisu({ id, changes }));
  };
  return <PageTable data={data} updateData={updateData} />;
}

export default Ekisu;
