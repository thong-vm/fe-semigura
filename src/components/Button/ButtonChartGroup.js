import { Button } from "@mui/material";
import classes from "./ButtonChartGroup.module.css"

function ButtonGroupChart({disableSave}) {
    return ( 
        <div className={classes.buttonTab} hidden={true}>
        <Button
          className={classes.buttonAction}
          variant="contained"
          size="small"
        >
          Cancel
        </Button>
        <Button
          className={classes.buttonAction}
          variant="contained"
          size="small"
          disabled={disableSave}
        >
          Save
        </Button>
      </div>
     );
}

export default ButtonGroupChart;