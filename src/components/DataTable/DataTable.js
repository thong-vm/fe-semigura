import React, { useState } from "react";
import { parseVarriableToLabel } from "../../help/parseVarriableToLabel";
import { convertDateTime, convertTime } from "../../help/convertDateTime";
import classes from "./DataTable.module.css";

const DataTable = ({ data, handleEditRow }) => {
  const transformData = data.map((items) => {
    const dataTrans = {
      Day: convertDateTime(items.time),
      Time: convertTime(items.time),
      ...items,
    };
    return dataTrans;
  });

  const [editableData, setEditableData] = useState(transformData);
  const handleInputChange = (newValue, rowIndex, columnName) => {
    const newData = [...editableData];
    newData[rowIndex] = {
      ...newData[rowIndex],
      [columnName]: newValue,
    };
    setEditableData(newData);
  };
  return (
    <div className={classes.tableContainer}>
      <table
        className={classes.tableHeaderCell}
        border="0"
        cellSpacing="0.5"
        cellPadding="0"
      >
        <tbody>
          {Object.keys(transformData[0]).map(
            (name, index) =>
              name !== "id" &&
              name !== "day" &&
              name !== "time" && (
                <tr key={index}>
                  <td className={classes.headerCell}>
                    {parseVarriableToLabel(name)}
                  </td>
                </tr>
              )
          )}
        </tbody>
      </table>
      <div style={{ overflowX: "auto" }}>
        <table border="0" cellSpacing="0.5" cellPadding="0">
          <tbody>
            {Object.keys(transformData[0]).map(
              (name, index) =>
                name !== "id" &&
                name !== "day" &&
                name !== "time" && (
                  <tr key={index}>
                    {editableData.map((column, rowIndex) => (
                      <td className={classes.inputTdCell} key={column.id}>
                        <input
                          type="text"
                          className={classes.inputCell}
                          value={column[name] ?? ""}
                          onChange={(e) => {
                            handleInputChange(e.target.value, rowIndex, name);
                            handleEditRow(column.id, name, e.target.value);
                          }}
                        />
                      </td>
                    ))}
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
