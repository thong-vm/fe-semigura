import { useDispatch, useSelector } from "react-redux";
import PageTable from "../../../components/page-table/page-table";
import {
  selectAllArukoru,
  updateArukoru,
} from "../../../store/moromi/arukoruSlice";

function Arukoru() {
  const dispatch = useDispatch();
  const data = useSelector(selectAllArukoru);
  const updateData = ({ id, changes }) => {
    dispatch(updateArukoru({ id, changes }));
  };
  return (
    <PageTable data={data} updateData={updateData} axis={{ x: "Day", y: "" }} />
  );
}

export default Arukoru;
