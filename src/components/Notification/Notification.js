import Dropdown from "../Dropdown/Dropdown";
import NotificationsIcon from "@mui/icons-material/Notifications";
function Notification() {
  const notificationDropdown = {
    element: <NotificationsIcon />,
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
  const handleNotification = (data) => {};
  return (
    <Dropdown
      content={notificationDropdown}
      handleOutputItem={handleNotification}
    />
  );
}

export default Notification;
