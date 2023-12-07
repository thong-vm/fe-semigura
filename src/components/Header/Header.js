import classes from "./Header.module.css";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import NotificationsIcon from "@mui/icons-material/Notifications";
import * as COLORS from "../../constants/colors";
import Dropdown from "../Dropdown/Dropdown";
import Clock from "../Clock/Clock";
import LogoutIcon from "@mui/icons-material/Logout";
function Header() {
  const languagueDropdown = {
    element: "",
    options: [
      {
        id: 1,
        name: "English",
      },
      {
        id: 2,
        name: "日本語",
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
    element: (
      <img
        className={classes.avatar}
        src="https://via.placeholder.com/200x200.png?text=avatar"
        alt=""
      />
    ),
    options: [
      {
        id: 1,
        name: "Log out",
        startIcon: <LogoutIcon />,
      },
    ],
  };

  return (
    <div
      style={{ backgroundColor: COLORS.header }}
      className={classes.container}
    >
      <ZoomOutMapIcon className={classes.zoomButton} />
      <div className={classes.userInfoContainer}>
        <Clock />
        <Dropdown content={languagueDropdown} />
        <Dropdown content={notificationDropdown} />
        <div
          style={{ color: COLORS.textAccent }}
          className={classes.userInfoDetail}
        >
          <span className={classes.userFullName}>ボー ミン トン</span>
          <div className={classes.avatarContainer}>
            {/* <img
              className={classes.avatar}
              src="https://via.placeholder.com/200x200.png?text=avatar"
              alt=""
            /> */}
            <Dropdown content={avatarDropdown} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
