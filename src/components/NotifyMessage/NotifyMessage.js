import { useDispatch, useSelector } from "react-redux";
import { Notify } from "../Notify/Notify";
import { closeMsg, selectMsg, selectSeverity } from "../../store/app/appSlice";
import { useEffect } from "react";

function NotifyMessage() {
  const dispatch = useDispatch();
  const msg = useSelector(selectMsg);
  const severity = useSelector(selectSeverity);
  const handleNotifyClose = () => {
    dispatch(closeMsg());
  };
  useEffect(() => {}, [dispatch]);
  return (
    <Notify error={msg} onOk={handleNotifyClose} severity={severity}></Notify>
  );
}

export default NotifyMessage;
