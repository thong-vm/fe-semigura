import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardContent,
  CardHeader,
  Collapse,
  Container,
  IconButton,
  colors,
} from "@mui/material";
import { useState } from "react";
import * as COLORS from "../../constants/colors";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function CollapseTab({ title, content }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const disable = true;
  return (
    <>
      <Card
        sx={{
          minWidth: 100,
          "margin-top": "2px",
          border: "1px solid COLORS.primaryMain",
          backgroundColor: COLORS.primaryMain,
          padding: "0px",
          fontSize: "15px",
        }}
      >
        <CardHeader
          style={{ color: "white", "font-size": "1.2rem", padding: "2px" }}
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
            "padding-left": "0px",
            "padding-right": "0px",
          }}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <CardContent>
              <Container
                sx={{
                  height: "full",
                  padding: "0px",
                }}
              >
                {content}
              </Container>
            </CardContent>
          </Collapse>
        </div>
      </Card>
    </>
  );
}

export default CollapseTab;
