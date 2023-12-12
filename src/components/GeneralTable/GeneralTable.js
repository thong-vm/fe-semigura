import React, { useState } from "react";
import classes from "./GeneralTable.module.css";
import { Pagination } from "@mui/material";

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
  const headers = Object.keys(data[0]);
  return (
    <div className={classes.container}>
      <Pagination
        className={classes.pagination}
        count={pageCount}
        color="primary"
        page={page}
        onChange={handleChange}
      />
      <table border="0" cellSpacing="0.5" cellPadding="0">
        <thead>
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
                <td
                  key={cellIndex}
                  style={{ minWidth: "5rem", border: "0.1px solid gray" }}
                >
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
  );
}

export default GeneralTable;
