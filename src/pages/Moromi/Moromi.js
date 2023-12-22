import { useDispatch, useSelector } from "react-redux";
import Arukoru from "./Arukoru/Arukoru";
import Bmd from "./Bmd/Bmd";
import Ekisu from "./Ekisu/Ekisu";
import MoromiGeneral from "./MoromiGeneral/MoromiGeneral";
import PrepareMoromi from "./PrepareMoromi/PrepareMoromi";
import React, { useEffect, useState } from "react";
import ComboBox from "../../components/ComboBox/ComboBox";
import { fetchLot, selectAllLots } from "../../store/lot/lotSlice";
import {
  fetchFactory,
  selectAllFactorys,
} from "../../store/factory/factorySlice";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import classes from "./Moromi.module.css";
import { fetchTank, selectAllTanks } from "../../store/tank/tankSlice";

function Moromi() {
  const factorys = useSelector(selectAllFactorys)?.map((factory) => {
    return {
      id: factory.id,
      label: factory.name,
    };
  });
  const lots = useSelector(selectAllLots)?.map((lot) => {
    return {
      id: lot.id,
      label: lot.code,
    };
  });
  const tanks = useSelector(selectAllTanks)?.map((tank) => {
    return {
      id: tank.id,
      label: tank.code,
    };
  });
  const dispatch = useDispatch();
  const [patchLotId, setPatchLotId] = useState(null);

  const moromiFilters = [
    {
      label: "Factory",
      dataSource: factorys,
    },
    {
      label: "Lot",
      dataSource: lots,
    },
    {
      label: "Tank",
      dataSource: tanks,
    },
  ];
  useEffect(() => {
    const loader = async () => {
      dispatch(fetchFactory());
      dispatch(fetchLot());
      dispatch(fetchTank());
    };
    loader();
  }, [patchLotId, dispatch]);
  if (!factorys || !lots || !tanks) {
    return (
      <div>
        <Skeleton height={50} />
        <Skeleton count={5} height={500} />
      </div>
    );
  }
  return (
    <>
      <div className={classes.comboBoxGroup}>
        {moromiFilters.map((moromiFilter, key) => (
          <ComboBox
            label={moromiFilter.label}
            dataSource={moromiFilter.dataSource}
            handleOutput={(data) => setPatchLotId(data?.id)}
          />
        ))}
      </div>
      <PrepareMoromi />
      <MoromiGeneral patchLotId={patchLotId ? patchLotId : lots[0].id} />
      <Bmd />
      <Arukoru />
      <Ekisu />
    </>
  );
}

export default Moromi;
