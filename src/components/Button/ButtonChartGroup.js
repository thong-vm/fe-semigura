import { Button } from "@mui/material";
import Clases from "./ButtonChartGroup.module.css"

function ButtonGroupChart(disableSave) {
    return ( 
        <div className={Clases.buttonTab} hidden="true">
        <Button
          className={Clases.buttonAction}
          variant="contained"
          size="small"
        >
          Cancel
        </Button>
        <Button
          className={Clases.buttonAction}
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