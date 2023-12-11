import * as React from "react";
import Chip from "@mui/material/Chip";
import { Avatar } from "@mui/material";
import classes from "./AvatarChip.module.css";

function AvatarChip({ role }) {
  const getAvatar = (text) => {
    return text[0].toUpperCase();
  };
  return (
    <Chip
      avatar={<Avatar>{getAvatar(role)}</Avatar>}
      label={<span className={classes.chipLabel}>{role}</span>}
    />
  );
}
export default AvatarChip;
