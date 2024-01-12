import { useEffect, useState } from "react";
import { Alert, Snackbar } from "@mui/material";
import { useTranslation } from "react-i18next";
import * as NOTIFIES from "../../constants/notify";
import classes from "./Notify.module.css";

export function Notify({ error, onOk, severity }) {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState(error);
  const { t } = useTranslation("common");
  useEffect(() => {
    setOpen(!!error);
    if (!!error) {
      setMsg(error);
    }
  }, [error]);

  function handleClose() {
    setOpen(false);
    onOk();
  }
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      className={severity ? classes.notifySnackbar : ""}
    >
      {severity && (
        <Alert
          onClose={handleClose}
          severity={severity}
          className={classes.notifyAlert}
        >
          {severity === NOTIFIES.ERROR
            ? `${t("ERROR")}\n「${t(msg)}」`
            : severity === "success"
            ? t("SUCCESS")
            : ""}
        </Alert>
      )}
    </Snackbar>
  );
}
