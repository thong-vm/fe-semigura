import {
  Card,
  CardContent,
  CardHeader,
  Collapse,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import * as COLORS from "../../constants/colors";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import classes from "./CollapseTab.module.css";

function CollapseTab({ title, content }) {
  const [open, setOpen] = useState(true);
  return (
    <Card className={classes.cardContent}>
      <CardHeader
        className={classes.cardHeaderColl}
        onClick={() => setOpen(!open)}
        sx={{
          backgroundColor: COLORS.primaryMain,
        }}
        title={title}
        action={
          <IconButton
            id="arrowButon"
            onClick={() => setOpen(!open)}
            aria-label="expand"
            size="small"
          >
            {open ? (
              <KeyboardArrowUpIcon className={classes.keyboardArrowUpIcon} />
            ) : (
              <KeyboardArrowDownIcon
                className={classes.keyboardArrowDownIcon}
              />
            )}
          </IconButton>
        }
      >
        {open ? (
          <KeyboardArrowUpIcon className={classes.keyboardArrowDownIcon} />
        ) : (
          <KeyboardArrowDownIcon className={classes.keyboardArrowDownIcon} />
        )}
      </CardHeader>
      <div className={classes.collapseContainer}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <CardContent>{content}</CardContent>
        </Collapse>
      </div>
    </Card>
  );
}

export default CollapseTab;
