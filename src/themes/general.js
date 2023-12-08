import { createTheme } from "@mui/material/styles";
import { primaryMain, secondaryMain } from "../constants/colors";

const general = createTheme({
  palette: {
    primary: {
      main: primaryMain,
    },
    secondary: {
      main: secondaryMain,
    },
  },
});

export default general;
