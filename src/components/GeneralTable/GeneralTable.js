import React, { useState } from "react";
import classes from "./GeneralTable.module.css";
import { Pagination } from "@mui/material";
import * as STRINGS from "../../constants/string";
import * as COLORS from "../../constants/colors";

function GeneralTable({ data, editAble, handleEditData }) {
  const itemsPerPage = 50;
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const pageCount = Math.ceil(data.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);
  const [tableData, setEditableData] = useState(currentData);
  const handleInputChange = (newValue, rowIndex, columnName) => {
    const newData = [...tableData];
    newData[rowIndex] = {
      ...newData[rowIndex],
      [columnName]: newValue,
    };
    setEditableData(newData);
  };
  const handleEditRow = (rowIndex, name, value) => {
    handleEditData(rowIndex, name, value);
  };
  if (!data || data.length === 0) {
    return <span>{STRINGS.generalTable.noData}</span>;
  }
  const headers = Object.keys(data[0]);
  return (
    <div
    className={classes.container}
    >
      <div className={classes.tableContainer}>
        <table border="0" cellSpacing="1" cellPadding="0">
          <thead
            className={classes.tableHeader}
            style={{ backgroundColor: COLORS.primaryMain }}
          >
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, index) => (
              <tr key={index}>
                {headers.map((name, cellIndex) => (
                  <td className={classes.row} key={cellIndex}>
                    <input
                      readOnly={!editAble}
                      type="text"
                      style={{ border: "none", outline: "none" }}
                      value={row[name] ?? ""}
                      onChange={(e) => {
                        handleInputChange(e.target.value, index, name);
                        handleEditRow(index, name, e.target.value);
                      }}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={classes.pagination}>
        <Pagination
          count={pageCount}
          color="primary"
          page={page}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default GeneralTable;
