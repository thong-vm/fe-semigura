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
import { fetchTank, selectAllTanks } from "../../store/tank/tankSlice";
import {
  fetchLocation,
  selectAllLocations,
  selectSelectedLocation,
  setSelectedLocation,
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
    })
    .filter((y) => true);

  const dispatch = useDispatch();

  const handleSelectedId = (object, label) => {
    if (label === "Factory") {
      dispatch(setSelectedFactory({ selectedFactory: object }));
    }
    if (label === "Lot") {
      dispatch(setSelectedLot({ selectedLot: object }));
    }
    if (label === "Location") {
      dispatch(setSelectedLocation({ selectedLocation: object }));
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
    },
  ];
  useEffect(() => {
    const loaderFactory = async () => {
      dispatch(fetchFactory());
    };
    const loaderLot = async () => {
      dispatch(fetchLot());
    };
    const loaderTank = async () => {
      dispatch(fetchTank());
    };
    const loaderLocation = async () => {
      dispatch(fetchLocation());
    };
    if (!factorys) {
      loaderFactory();
    }
    if (!lots) {
      loaderLot();
    }
    if (!tanks) {
      loaderTank();
    }
    if (!locations) {
      loaderLocation();
    }
    if (!selectedFactory && factorys) {
      dispatch(setSelectedFactory({ selectedFactory: factorys[0] }));
    }

    if (!selectedLocation && locations) {
      dispatch(setSelectedLocation({ selectedLocation: locations[0] }));
    }
    if (!selectedLot && lots) {
      dispatch(setSelectedLot({ selectedLot: lots[0] }));
    }
    console.log("selectedLot :", selectedLot);
  }, [
    factorys,
    lots,
    tanks,
    locations,
    selectedLot,
    selectedFactory,
    selectedLocation,
    dispatch,
  ]);
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
            valueSelected={moromiFilter.valueSelected}
            handleOutput={(data) => handleSelectedId(data, moromiFilter.label)}
          />
        ))}
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
