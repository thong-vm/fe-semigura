import { QuestionMark } from "@mui/icons-material";
import Dashboard from "../pages/Dashboard/Dashboard";
import Moromi from "../pages/Moromi/Moromi";
import PrepareMoromi from "../pages/Moromi/PrepareMoromi/PrepareMoromi";
import MoromiGeneral from "../pages/Moromi/MoromiGeneral/MoromiGeneral";
import Bmd from "../pages/Moromi/Bmd/Bmd";
import Arukoru from "../pages/Moromi/Arukoru/Arukoru";
import Ekisu from "../pages/Moromi/Ekisu/Ekisu";
import NotFound from "../pages/notFound/notFound";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";

export const layout = {
  id: "dashBoard",
  title: "Dash board",
  path: "/",
  icon: <HomeIcon />,
  element: <Dashboard />,
};
export const dashBoard = {
  id: "dashBoard",
  title: "Dash board",
  path: "/dashboard",
  icon: <HomeIcon />,
  element: <Dashboard />,
};
export const moromi = {
  id: "moromi",
  title: "Moromi",
  path: "/moromi",
  icon: <QuestionMark />,
  element: <Moromi />,
};
export const prepareMoromi = {
  id: "prepareMoromi",
  title: "Prepare Moromi",
  path: "/moromi/prepareMoromi",
  icon: <QuestionMark />,
  element: <PrepareMoromi />,
};
export const moromiGeneral = {
  id: "moromiGeneral",
  title: "Moromi General",
  path: "/moromi/general",
  icon: <QuestionMark />,
  element: <MoromiGeneral />,
};
export const bmd = {
  id: "bmd",
  title: "BMD",
  path: "/moromi/bmd",
  icon: <QuestionMark />,
  element: <Bmd />,
};
export const arukoru = {
  id: "arukoru",
  title: "Arukoru",
  path: "/moromi/arukoru",
  icon: <QuestionMark />,
  element: <Arukoru />,
};
export const ekisu = {
  id: "ekisu",
  title: "Ekisu",
  path: "/moromi/ekisu",
  icon: <QuestionMark />,
  element: <Ekisu />,
};
export const logOut = {
  id: "logOut",
  title: "Log out",
  path: "/login",
  icon: <LogoutIcon />,
  element: <Dashboard />,
};
export const notFound = {
  id: "notFound",
  path: "/*",
  element: <NotFound />,
};
