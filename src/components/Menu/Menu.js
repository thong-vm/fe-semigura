import React, { useState } from "react";
import {
  Box,
  Button,
  Collapse,
  Drawer,
  Fab,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { KeyboardArrowDown } from "@mui/icons-material";
import PushPinIcon from "@mui/icons-material/PushPin";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import { menus } from "../../constants/menus.js";
import { useNavigate } from "react-router-dom";
import * as ROUTES from "../../constants/routes.js";
import * as COLORS from "../../constants/colors.js";
import LocalStorage from "../../services/localStorage/localStorage.js";
import { useTranslation } from "react-i18next";

const C = {
  temporary: "temporary",
  persistent: "persistent",
  permanent: "permanent",
};

const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.sidebarPrimary,
    },
    secondary: {
      main: COLORS.sidebarSecondary,
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          border: "none",
        },
      },
    },
  },
});

function Sidebar() {
  const { t } = useTranslation("menu");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expandState, setExpandState] = useState({});
  const [variant, setVariant] = useState(C.permanent);
  const navigate = useNavigate();
  const toggleDrawer = (open, sender) => {
    return (event) => {
      if (variant !== C.temporary) {
        return;
      }
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };
  };

  const onExpandSw = (title) => {
    var newState = { ...expandState };
    newState[title] = !expandState[title];
    setExpandState(newState);
  };

  const logOut = (path) => {
    LocalStorage.remove("token");
    navigate(path);
  };

  const onNavigate = (path, title) => {
    setDrawerOpen(false);
    if (title === ROUTES.logOut.title) {
      logOut(path);
    }
    navigate(path);
  };

  const isOpen = (title) => {
    return !expandState[title];
  };

  const renderItems = (list, lvl = 1) => {
    return list.map((item, index) => {
      var { title, path, icon, translateName } = item;
      if (item.children) {
        return (
          <div key={index}>
            <ListItemButton
              alignItems="flex-start"
              onClick={() => onExpandSw(title)}
              sx={{
                px: 2,
                pt: 2.5,
                pb: isOpen(title) ? 0 : 2.5,
                "&:hover, &:focus": {
                  "& svg": { opacity: isOpen(title) ? 1 : 1 },
                },
              }}
            >
              <ListItemIcon sx={{ color: "inherit", mt: 0 }}>
                {icon}
              </ListItemIcon>
              <ListItemText
                primary={t(translateName)}
                primaryTypographyProps={{
                  fontSize: 20 - lvl * 2,
                  fontWeight: lvl < 3 ? "Bold" : lvl === 2 ? "500%" : "medium",
                  letterSpacing: 0,
                  color: "primary.contrastText",
                }}
                secondary={item.children.map((c) => c.title).join()}
                secondaryTypographyProps={{
                  noWrap: true,
                  fontSize: 12,
                  lineHeight: "16px",
                  color: isOpen(title)
                    ? "rgba(0,0,0,0)"
                    : "rgba(255,255,255,0.5)",
                }}
                sx={{ my: 0 }}
              />
              <KeyboardArrowDown
                sx={{
                  mr: -1,
                  opacity: 0,
                  transform: isOpen(title) ? "rotate(-180deg)" : "rotate(0)",
                  transition: "0.2s",
                }}
              />
            </ListItemButton>
            <Collapse in={isOpen(title)} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ pl: lvl * 2 }}>
                {renderItems(item.children, lvl + 1)}
              </List>
            </Collapse>
          </div>
        );
      } else {
        return (
          <ListItem key={`${title}-${index}`} disablePadding>
            <ListItemButton onClick={() => onNavigate(path, title)}>
              <ListItemIcon sx={{ color: "inherit" }}>{icon}</ListItemIcon>
              <ListItemText primary={t(translateName)} />
            </ListItemButton>
          </ListItem>
        );
      }
    });
  };

  const onPin = () => {
    setDrawerOpen(false);
    setVariant(C.permanent);
  };
  const onUnPin = () => {
    return setVariant(C.temporary);
  };
  return (
    <Box
      sx={{
        minWidth: variant === C.temporary ? 0 : 250,
      }}
    >
      <Button
        sx={{
          position: "fixed",
          zIndex: 4,
          top: 0,
          display: "flex",
          alignItems: "center",
          height: "50px",
        }}
        onClick={toggleDrawer(true, "menu")}
      >
        <MenuIcon sx={{ color: "white" }} />
      </Button>
      <ThemeProvider theme={theme}>
        <Drawer
          variant={variant}
          anchor={"left"}
          open={drawerOpen}
          onClose={toggleDrawer(false, "drawer")}
          PaperProps={{
            sx: {
              bgcolor: "primary.main",
              color: "primary.contrastText",
            },
          }}
        >
          <Box
            sx={{
              width: 250,
              height: "100%",
            }}
            role="presentation"
          >
            <List>
              <ListItem>
                <ListItemText>
                  <Typography variant="h5" fontWeight={"bold"}>
                    {"Semigura"}
                  </Typography>
                </ListItemText>

                <Fab
                  size="small"
                  color="secondary"
                  onClick={variant === C.temporary ? onPin : onUnPin}
                  aria-label="pin"
                >
                  {variant === C.temporary ? (
                    <PushPinOutlinedIcon />
                  ) : (
                    <PushPinIcon />
                  )}
                </Fab>
              </ListItem>
              {renderItems(menus)}
            </List>
          </Box>
        </Drawer>
      </ThemeProvider>
    </Box>
  );
}
export default Sidebar;
