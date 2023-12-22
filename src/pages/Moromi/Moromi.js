import { useDispatch, useSelector } from "react-redux";
import Arukoru from "./Arukoru/Arukoru";
import Bmd from "./Bmd/Bmd";
import Ekisu from "./Ekisu/Ekisu";
import MoromiGeneral from "./MoromiGeneral/MoromiGeneral";
import PrepareMoromi from "./PrepareMoromi/PrepareMoromi";
import React, { useEffect, useState } from "react";
import ComboBox from "../../components/ComboBox/ComboBox";
import { fetchBatch, selectAllBatchs } from "../../store/batch/batchSlice";
import classes from "./Moromi.module.css";

function Moromi() {
  const batchs = useSelector(selectAllBatchs)?.map((x) => {
    return {
      id: x.id,
      label: x.name,
    };
  });
  const dispatch = useDispatch();
  const [patchId, setPatchId] = useState(null);

  const handleSelect = (data) => {
    setPatchId(data.id);
  };

  useEffect(() => {
    const loader = async () => {
      dispatch(fetchBatch());
    };
    loader();
  }, [patchId, dispatch]);

  return (
    <>
      {batchs && (
        <>
          <div className={classes.comboBox}>
            <label>Patch: </label>
            <ComboBox dataSource={batchs} handleOutput={handleSelect} />
          </div>
          <PrepareMoromi />

          <MoromiGeneral patchId={patchId ? patchId : batchs[0].id} />

          <Bmd />
          <Arukoru />
          <Ekisu />
        </>
      )}
    </>
  );
}

export default Moromi;
