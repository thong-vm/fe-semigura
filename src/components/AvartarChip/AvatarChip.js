import * as React from "react";
import Chip from "@mui/material/Chip";
import { Avatar } from "@mui/material";
import * as COLORS from "../../constants/colors";

function AvatarChip({ role }) {
  const getAvatar = (text) => {
    return text[0].toUpperCase();
  };
  return (
    <Chip
      avatar={<Avatar>{getAvatar(role)}</Avatar>}
      label={<span style={{ color: COLORS.textAccent }}>{role}</span>}
    />
  );
}
export default AvatarChip;
