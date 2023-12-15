import { useTranslation } from "react-i18next";
import { parseToLineArray } from "../../help/parseToLineArray";
import Chart from "../Chart/Chart";
import DataTable from "../DataTable/DataTable";

function PageTable({ data, yAxisName, standardLines, axis, updateData }) {
  const { t } = useTranslation("page_table");
  if (!data || !data.length) {
    return <>{t('NO_DATA')}</>;
  }
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
    </>
  );
}

export default PageTable;
