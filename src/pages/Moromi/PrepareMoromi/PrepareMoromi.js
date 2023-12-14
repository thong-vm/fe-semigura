import { useDispatch, useSelector } from "react-redux";
import PageTable from "../../../components/PageTable/PageTable";
import {
  selectAllPrepareMoromi,
  updatePrepareMoromi,
} from "../../../store/moromi/prepareMoromiSlice";
import {
  Card,
  CardContent,
  CardHeader,
  Collapse,
  Container,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CollapseTab from "../../../components/CollapseTab/CollapseTab";

function PrepareMoromi() {
  const dispatch = useDispatch();
  const data = useSelector(selectAllPrepareMoromi);
  const [open, setOpen] = useState(false);
  const disable = true;
  const updateData = ({ id, changes }) => {
    dispatch(updatePrepareMoromi({ id, changes }));
  };
  return (
    <>
      <CollapseTab
        title="Prepare Moromi"
        content={
          <PageTable
            data={data}
            updateData={updateData}
            axis={{ x: "Time", y: "t°" }}
            yAxisName={"time"}
            disableSave={disable}
          />
        }
      ></CollapseTab>
    </>
  );
}

export default PrepareMoromi;
