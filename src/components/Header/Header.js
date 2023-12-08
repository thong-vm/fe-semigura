import classes from "./Header.module.css";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import NotificationsIcon from "@mui/icons-material/Notifications";
import * as COLORS from "../../constants/colors";
import Dropdown from "../Dropdown/Dropdown";
import Clock from "../Clock/Clock";
import LogoutIcon from "@mui/icons-material/Logout";
import * as ICONS from "../../constants/svgIcons";
import * as ROUTES from "../../constants/routes.js";
import { useNavigate } from "react-router-dom";
import AvatarChip from "../AvartarChip/AvatarChip.js";
function Header() {
  const languagueDropdown = {
    element: "",
    options: [
      {
        id: 1,
        name: "English",
        startIcon: ICONS.english,
      },
      {
        id: 2,
        name: "日本語",
        startIcon: ICONS.japanese,
      },
    ],
  };
  const notificationDropdown = {
    element: <NotificationsIcon sx={{ color: COLORS.textAccent }} />,
    options: [
      {
        id: 1,
        name: "Notification 1",
      },
      {
        id: 2,
        name: "Notification 2",
      },
    ],
  };
  const avatarDropdown = {
    element: <AvatarChip role={"admin"} />,
    options: [
      {
        id: 1,
        name: ROUTES.logOut.title,
        path: ROUTES.logOut.path,
        startIcon: <LogoutIcon />,
      },
    ],
  };
  const navigate = useNavigate();
  const handleLanguagueDropdown = (data) => {};
  const handleNotificationDropdown = (data) => {};
  const handleAvatarDropdown = (data) => {
    if (data.path) {
      navigate(data.path);
    }
  };

  return (
    <div
      style={{ backgroundColor: COLORS.header }}
      className={classes.container}
    >
      <ZoomOutMapIcon className={classes.zoomButton} />
      <div className={classes.userInfoContainer}>
        <Clock />
        <Dropdown
          content={languagueDropdown}
          handleOutputItem={handleLanguagueDropdown}
        />
        <Dropdown
          content={notificationDropdown}
          handleOutputItem={handleNotificationDropdown}
        />
        <div
          style={{ color: COLORS.textAccent }}
          className={classes.userInfoDetail}
        >
          <span className={classes.userFullName}>ボー ミン トン</span>
          <div className={classes.avatarContainer}>
            <Dropdown
              content={avatarDropdown}
              handleOutputItem={handleAvatarDropdown}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
