import classes from "./Header.module.css";
import * as COLORS from "../../constants/colors";
import Clock from "../Clock/Clock";
import Notification from "../Notification/Notification.js";
import Language from "../Language/Language.js";
import Avatar from "../Avatar/Avatar.js";

function Header() {
  return (
    <div
      style={{ backgroundColor: COLORS.header }}
      className={classes.container}
    >
      <div className={classes.userInfoContainer}>
        <Clock />
        <Language />
        <Notification />
        <div className={classes.userInfoDetail}>
          <span className={classes.userFullName}>ボー ミン トン</span>
          <div className={classes.avatarContainer}>
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
