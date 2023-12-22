import { useDispatch, useSelector } from "react-redux";
import Arukoru from "./Arukoru/Arukoru";
import Bmd from "./Bmd/Bmd";
import Ekisu from "./Ekisu/Ekisu";
import MoromiGeneral from "./MoromiGeneral/MoromiGeneral";
import PrepareMoromi from "./PrepareMoromi/PrepareMoromi";
import React, { useEffect, useState } from "react";
import ComboBox from "../../components/ComboBox/ComboBox";
import {
  fetchLot,
  selectAllLots,
  selectSelectedLot,
  setSelectedLot,
} from "../../store/lot/lotSlice";
import {
  fetchFactory,
  selectAllFactorys,
  selectSelectedFactory,
} from "../../store/factory/factorySlice";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import classes from "./Moromi.module.css";
import { fetchTank, selectAllTanks } from "../../store/tank/tankSlice";
import {
  fetchLocation,
  selectAllLocations,
} from "../../store/location/locationSlice";

function Moromi() {
  const selectedFactory = useSelector(selectSelectedFactory);
  const factorys = useSelector(selectAllFactorys)?.map((factory) => {
    return {
      id: factory.id,
      label: factory.name,
    };
  });
  const selectedLot = useSelector(selectSelectedLot);
  const lots = useSelector(selectAllLots)
    ?.map((lot) => {
      return {
        id: lot.id,
        label: lot.code,
      };
    })
    .filter((lot) => selectedFactory?.lots?.some((l) => l?.id === lot?.id));
  const tanks = useSelector(selectAllTanks)?.map((tank) => {
    return {
      id: tank.id,
      label: tank.code,
    };
  });
  const locations = useSelector(selectAllLocations)?.map((location) => {
    return {
      id: location.id,
      label: location.name,
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
    {
      label: "Location",
      dataSource: locations,
    },
  ];
  useEffect(() => {
    const loader = async () => {
      dispatch(fetchFactory());
      dispatch(fetchLot());
      dispatch(fetchTank());
      dispatch(fetchLocation());
    };
    if (!selectedFactory || !selectedFactory) {
      loader();
    }
    if (!selectedLot && selectedFactory) {
      dispatch(setSelectedLot({ selectedLot: selectedFactory.lots[0] }));
    }
  }, [patchLotId, selectedFactory, selectedLot, dispatch]);
  if (!factorys || !lots || !tanks || !locations) {
    return (
      <div>
        <Skeleton height={55} />
        <Skeleton height={55} />
        <Skeleton count={5} height={500} />
      </div>
    );
  }
  return (
    <>
      <div className={classes.comboBoxGroup}>
        {moromiFilters.map((moromiFilter, key) => (
          <ComboBox
            key={key}
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
