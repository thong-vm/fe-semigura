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

function CollapseTab({ title, content }) {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Card
        sx={{
          backgroundColor: COLORS.primaryMain,
          padding: "0px",
          fontSize: "15px",
          borderRadius: "0px",
        }}
      >
        <CardHeader
          sx={{ color: "white", "font-size": "1.2rem", padding: "2px" }}
          title={title}
          action={
            <IconButton
              onClick={() => setOpen(!open)}
              aria-label="expand"
              size="small"
            >
              {open ? (
                <KeyboardArrowUpIcon style={{ color: "white" }} />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </IconButton>
          }
        ></CardHeader>
        <div
          style={{
            backgroundColor: "rgba(248, 249, 249)",
          }}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <CardContent>{content}</CardContent>
          </Collapse>
        </div>
      </Card>
    </>
  );
}

export default CollapseTab;
