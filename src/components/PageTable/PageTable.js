import { Button } from "@mui/material";
import { parseToLineArray } from "../../help/parseToLineArray";
import Chart from "../Chart/Chart";
import DataTable from "../DataTable/DataTable";
import Clases from "./PageTable.module.css";

function PageTable({
  data,
  yAxisName,
  standardLines,
  axis,
  updateData,
  disableSave,
}) {
  const xAxisData = Array.from({ length: data.length }, (_, index) => {
    return yAxisName ? data[index][yAxisName] : index + 1;
  });
  const chartData = {
    xAxisData: xAxisData,
    line: parseToLineArray(data),
  };
  const handleEditRow = (id, name, value) => {
    var changes = {
      [name]: value && !isNaN(value) ? parseFloat(value) : value,
    };
    updateData({ id, changes });
  };

  return (
    <>
      {xAxisData.length && (
        <Chart
          dataLineChart={chartData}
          standardLines={standardLines}
          axis={axis}
        />
      )}
      <DataTable data={data} handleEditRow={handleEditRow} />
      <div className={Clases.buttonTab}>
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
    </>
  );
}

export default PageTable;
