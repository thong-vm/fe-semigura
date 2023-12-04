import { useEffect, useState } from "react";
import Chart from "../components/chart/chart";
import { parseToLineArray } from "../help/parseToLineArray";
import DataTable from "../components/data-table/data-table";
import { useDispatch, useSelector } from "react-redux";
import { selectAllMoromis, updateMoromi } from "../store/moromi/moromiSlice";
function Moromi() {
  const dispatch = useDispatch();
  const data = useSelector(selectAllMoromis);
  const [chartData, setDataLineChart] = useState({
    xAxisData: [],
    line: parseToLineArray(data),
  });
  const handleEditRow = (id, name, value) => {
    var changes = {
      [name]: value && !isNaN(value) ? parseFloat(value) : value,
    };

    dispatch(updateMoromi({ id, changes }));
  };
  useEffect(() => {
    const xAxisData = Array.from(
      { length: data.length },
      (_, index) => index + 1
    );
    setDataLineChart({
      xAxisData: xAxisData,
      line: parseToLineArray(data),
    });
  }, [data, dispatch]);
  return (
    <div>
      {chartData.xAxisData.length && <Chart dataLineChart={chartData} />}
      <DataTable data={data} handleEditRow={handleEditRow} />
    </div>
  );
}

export default Moromi;
