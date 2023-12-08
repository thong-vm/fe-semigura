import { createTheme } from "@mui/material/styles";
import { main, secondaryMain } from "../constants/colors";

const general = createTheme({
  palette: {
    primary: {
      main: main,
    },
    secondary: {
      main: secondaryMain,
    },
  },
});

export default general;
