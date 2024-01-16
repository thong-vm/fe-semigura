import { useDispatch, useSelector } from "react-redux";
import Arukoru from "./Arukoru/Arukoru";
import Bmd from "./Bmd/Bmd";
import Ekisu from "./Ekisu/Ekisu";
import MoromiGeneral from "./MoromiGeneral/MoromiGeneral";
import PrepareMoromi from "./PrepareMoromi/PrepareMoromi";
import React, { useEffect } from "react";
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
  setSelectedFactory,
} from "../../store/factory/factorySlice";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import classes from "./Moromi.module.css";
import {
  fetchTank,
  selectAllTanks,
  selectSelectedTank,
  setSelectedTank,
} from "../../store/tank/tankSlice";
import {
  fetchLocation,
  selectAllLocations,
  selectSelectedLocation,
  setSelectedLocation,
} from "../../store/location/locationSlice";
import { useState } from "react";

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
    ?.filter((x) => selectedFactory?.id === x.factoryId)
    .map((lot) => {
      return {
        id: lot.id,
        label: lot.code,
        lotContainers: lot.lotContainers,
      };
    });
  const selectedLocation = useSelector(selectSelectedLocation);
  const locations = useSelector(selectAllLocations)?.map((location) => {
    return {
      id: location.id,
      label: location.name,
    };
  });
  const selectedTank = useSelector(selectSelectedTank);
  const tanks = useSelector(selectAllTanks)
    ?.filter((x) => selectedLocation?.id === x.locationId)
    ?.filter((y) =>
      selectedLot?.lotContainers?.some((k) => k.containerId === y.id)
    )
    .map((tank) => {
      return {
        id: tank.id,
        label: tank.code,
      };
    });

  const dispatch = useDispatch();

  const dispatchActions = {
    Factory: setSelectedFactory,
    Lot: setSelectedLot,
    Location: setSelectedLocation,
    Tank: setSelectedTank,
  };

  const handleSelectedId = (object, label) => {
    const action = dispatchActions[label];
    if (action) {
      dispatch(action({ [`selected${label}`]: object }));
    }
  };

  const moromiFilters = [
    {
      label: "Factory",
      dataSource: factorys,
      valueSelected: selectedFactory,
    },
    {
      label: "Location",
      dataSource: locations,
      valueSelected: selectedLocation,
    },
    {
      label: "Lot",
      dataSource: lots,
      valueSelected: selectedLot,
    },
    {
      label: "Tank",
      dataSource: tanks,
      valueSelected: selectedTank,
    },
  ];
  useEffect(() => {
    if (!factorys) dispatch(fetchFactory());
    if (!lots) dispatch(fetchLot());
    if (!tanks) dispatch(fetchTank());
    if (!locations) dispatch(fetchLocation());
  }, [factorys, lots, tanks, locations, dispatch]);

  useEffect(() => {
    if (selectedFactory === undefined && factorys?.length > 0) {
      dispatch(setSelectedFactory({ selectedFactory: factorys[0] }));
    }
    if (selectedLocation === undefined && locations?.length > 0) {
      dispatch(setSelectedLocation({ selectedLocation: locations[0] }));
    }
    if (selectedLot === undefined && lots?.length > 0) {
      dispatch(setSelectedLot({ selectedLot: lots[0] }));
    }
    if (selectedTank === undefined && tanks?.length > 0) {
      dispatch(setSelectedTank({ selectedTank: tanks[0] }));
    }
  }, [
    factorys,
    lots,
    locations,
    tanks,
    selectedFactory,
    selectedLocation,
    selectedLot,
    selectedTank,
    dispatch,
  ]);

  if (
    !factorys ||
    !lots ||
    !tanks ||
    !locations ||
    !selectedLot ||
    !selectedFactory ||
    !selectedLocation ||
    !selectedTank
  ) {
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
        {moromiFilters.map((moromiFilter, key) => {
          return (
            <ComboBox
              key={key}
              label={moromiFilter.label}
              dataSource={moromiFilter.dataSource}
              valueSelected={moromiFilter.valueSelected}
              handleOutput={(data) =>
                handleSelectedId(data, moromiFilter.label)
              }
            />
          );
        })}
      </div>
      <PrepareMoromi />
      <MoromiGeneral patchLotId={selectedLot ? selectedLot.id : lots[0]?.id} />
      <Bmd />
      <Arukoru />
      <Ekisu />
    </>
  );
}

export default Moromi;
