import { IconButton, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import readXlsxFile from "read-excel-file";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import classes from "./ExcelImport.module.css";

const ExcelImport = () => {
  const [excelData, setExcelData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = async (file) => {
    try {
      setIsLoading(true);
      const data = await readXlsxFile(file);
      setExcelData(data);
    } catch (error) {
      setIsLoading(false);
      console.error("Error reading Excel file:", error);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    handleFileChange(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const inputRef = useRef(null);
  const filePicker = () => {
    inputRef.current.click();
  };

  return (
    <>
      {!excelData ? (
        <span
          className={classes.dragContainer}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <span className={classes.dragIcon}>
            <IconButton onClick={filePicker} color="primary">
              <CloudUploadOutlinedIcon></CloudUploadOutlinedIcon>
            </IconButton>
            <span>{"DRAG FILE HERE OR BROWSE"}</span>
          </span>
          <input
            type="file"
            accept=".xls, .xlsx"
            ref={inputRef}
            onChange={(e) => handleFileChange(e.target.files[0])}
            hidden
          />
        </span>
      ) : (
        <div className={classes.container}>
          <table>
            <thead>
              <tr>
                {excelData[0].map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {excelData.slice(1).map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default ExcelImport;
