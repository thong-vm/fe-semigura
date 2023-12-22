import { useDispatch, useSelector } from "react-redux";
import Arukoru from "./Arukoru/Arukoru";
import Bmd from "./Bmd/Bmd";
import Ekisu from "./Ekisu/Ekisu";
import MoromiGeneral from "./MoromiGeneral/MoromiGeneral";
import PrepareMoromi from "./PrepareMoromi/PrepareMoromi";
import React, { useEffect, useState } from "react";
import ComboBox from "../../components/ComboBox/ComboBox";
import { fetchLot, selectAllLots } from "../../store/lot/lotSlice";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Moromi() {
  const lots = useSelector(selectAllLots)?.map((lot) => {
    return {
      id: lot.id,
      label: lot.code,
    };
  });
  const dispatch = useDispatch();
  const [patchLotId, setPatchLotId] = useState(null);

  const handleSelect = (data) => {
    setPatchLotId(data.id);
  };

  useEffect(() => {
    const loader = async () => {
      dispatch(fetchLot());
    };
    loader();
  }, [patchLotId, dispatch]);
  if (!lots) {
    return (
      <div>
        <Skeleton height={50} width={250} />
        <Skeleton count={5} height={500} />
      </div>
    );
  }
  return (
    <>
      <ComboBox label={"Lot"} dataSource={lots} handleOutput={handleSelect} />
      <PrepareMoromi />
      <MoromiGeneral patchLotId={patchLotId ? patchLotId : lots[0].id} />
      <Bmd />
      <Arukoru />
      <Ekisu />
    </>
  );
}

export default Moromi;
