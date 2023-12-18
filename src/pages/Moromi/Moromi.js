import { useDispatch, useSelector } from "react-redux";
import Arukoru from "./Arukoru/Arukoru";
import Bmd from "./Bmd/Bmd";
import Ekisu from "./Ekisu/Ekisu";
import MoromiGeneral from "./MoromiGeneral/MoromiGeneral";
import PrepareMoromi from "./PrepareMoromi/PrepareMoromi";
import { useEffect } from "react";
import ComboBox from "../../components/ComboBox/ComboBox";
import { fetchBatch, selectAllBatchs } from "../../store/batch/batchSlice";

function Moromi() {
  const batchs = useSelector(selectAllBatchs)?.map((x) => {
    return {
      id: x.id,
      label: x.name,
    };
  });
  const dispatch = useDispatch();
  useEffect(() => {
    const loader = async () => {
      dispatch(fetchBatch());
    };
    loader();
  }, [dispatch]);
  return (
    <>
      <div
        class="row"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          margin: "5px",
        }}
      >
        <label>Patch: </label>
        {batchs && <ComboBox dataSource={batchs} />}
      </div>

      <PrepareMoromi />
      <MoromiGeneral />
      <Bmd />
      <Arukoru />
      <Ekisu />
    </>
  );
}

export default Moromi;
