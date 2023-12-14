import { useNavigate } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
import * as ROUTES from "../../constants/routes.js";
import LogoutIcon from "@mui/icons-material/Logout";
import AvatarChip from "../AvartarChip/AvatarChip.js";
function Avatar() {
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

  const handleAvatarDropdown = (data) => {
    if (data.path) {
      navigate(data.path);
    }
  };
  return (
    <Dropdown
      content={avatarDropdown}
      handleOutputItem={handleAvatarDropdown}
    />
  );
}

export default Avatar;
