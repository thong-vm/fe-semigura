import { QuestionMark, Upload } from "@mui/icons-material";
import Dashboard from "../pages/Dashboard/Dashboard";
import Moromi from "../pages/Moromi/Moromi";
import PrepareMoromi from "../pages/Moromi/PrepareMoromi/PrepareMoromi";
import MoromiGeneral from "../pages/Moromi/MoromiGeneral/MoromiGeneral";
import Bmd from "../pages/Moromi/Bmd/Bmd";
import Arukoru from "../pages/Moromi/Arukoru/Arukoru";
import Ekisu from "../pages/Moromi/Ekisu/Ekisu";
import NotFound from "../pages/notFound/notFound";
import LogoutIcon from "@mui/icons-material/Logout";
import MoromiImport from "../pages/Moromi/MoromiImport/MoromiImport";
import MonitorIcon from "@mui/icons-material/Monitor";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import SpeedIcon from "@mui/icons-material/Speed";
import SummarizeIcon from "@mui/icons-material/Summarize";
import LineAxisIcon from "@mui/icons-material/LineAxis";
export const layout = {
  id: "dashBoard",
  title: "Dashboard",
  path: "/",
  icon: <SpeedIcon />,
  element: <Dashboard />,
  translateName: "DASHBOARD",
};

export const dashBoard = {
  id: "dashBoard",
  title: "Dashboard",
  path: "/dashboard",
  icon: <SpeedIcon />,
  element: <Dashboard />,
  translateName: "DASHBOARD",
};

export const moromi = {
  id: "moromi",
  title: "Moromi",
  path: "/moromi",
  icon: <MonitorIcon />,
  element: <Moromi />,
  translateName: "MOROMI",
};

export const moromiImport = {
  id: "moromiImport",
  title: "Moromi Import",
  path: "/moromi/import",
  icon: <Upload />,
  element: <MoromiImport />,
  translateName: "MOROMI_IMPORT",
};

export const prepareMoromi = {
  id: "prepareMoromi",
  title: "Prepare Moromi",
  path: "/moromi/prepareMoromi",
  icon: <MoveToInboxIcon />,
  element: <PrepareMoromi />,
  translateName: "PREPARE_MOROMI",
};

export const moromiGeneral = {
  id: "moromiGeneral",
  title: "Moromi General",
  path: "/moromi/general",
  icon: <SummarizeIcon />,
  element: <MoromiGeneral />,
  translateName: "MOROMI_GENERAL",
};

export const bmd = {
  id: "bmd",
  title: "BMD",
  path: "/moromi/bmd",
  icon: <LineAxisIcon />,
  element: <Bmd />,
  translateName: "BMD",
};

export const arukoru = {
  id: "arukoru",
  title: "Arukoru",
  path: "/moromi/arukoru",
  icon: <LineAxisIcon />,
  element: <Arukoru />,
  translateName: "ARUKORU",
};

export const ekisu = {
  id: "ekisu",
  title: "Ekisu",
  path: "/moromi/ekisu",
  icon: <LineAxisIcon />,
  element: <Ekisu />,
  translateName: "EKISU",
};

export const logOut = {
  id: "logOut",
  title: "Log out",
  translateName: "LOG_OUT",
  path: "/login",
  icon: <LogoutIcon />,
  element: <Dashboard />,
};

export const notFound = {
  id: "notFound",
  path: "/*",
  element: <NotFound />,
  translateName: "NOT_FOUND",
};
