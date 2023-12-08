import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import * as COLORS from "../../constants/colors";
import classes from "./Dropdown.module.css";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function Dropdown({ content, handleOutputItem }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (option) => {
    setAnchorEl(null);
    if (option.name) {
      setLabel(option.name);
      handleOutputItem(option);
    }
  };

  const [label, setLabel] = useState(
    content.element ? content.element : content.options[0].name
  );

  return (
    <div className={classes.dropdownContainer}>
      <div style={{ color: COLORS.textAccent }} onClick={handleClick}>
        {content.element ? content.element : label}
      </div>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {content.options.map((option, index) => (
          <MenuItem
            key={index}
            onClick={() => handleClose(option)}
            disableRipple
          >
            <div className={classes.menuItem}>
              <div className={classes.startIcon}>{option.startIcon}</div>
              <div className={classes.name}>{option.name}</div>
            </div>
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
}
