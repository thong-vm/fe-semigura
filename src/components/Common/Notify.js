import { useEffect, useState } from "react";
import { Alert, Snackbar } from "@mui/material";

export function Notify({ error, onOk }) {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState(error);
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
  return <Snackbar
    anchorOrigin={{ vertical: "top", horizontal: "right" }}
    open={open}
    autoHideDuration={6000}
    onClose={handleClose}
  >
    <Alert
      onClose={handleClose}
      severity={!!msg ? "error" : "success"}
      sx={{ width: "100%", whiteSpace: 'pre-line' }}
    >
      {!!msg ? `エラーが発生した！\n「${msg}」` : "正常に完了しました!"}
    </Alert>
  </Snackbar>;
}
