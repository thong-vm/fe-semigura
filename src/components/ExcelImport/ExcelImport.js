import { CircularProgress, IconButton } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import readXlsxFile from "read-excel-file";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import classes from "./ExcelImport.module.css";
import GeneralTable from "../GeneralTable/GeneralTable";

function ExcelImport() {
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

  useEffect(() => {
    console.log("isLoading :", isLoading);
    if (excelData) {
      setIsLoading(false);
    }
  }, [isLoading, excelData]);

  return (
    <>
      {!excelData ? (
        <span
          className={classes.dragContainer}
          onDrop={!isLoading && handleDrop}
          onDragOver={!isLoading && handleDragOver}
        >
          {isLoading ? (
            <CircularProgress color="primary" />
          ) : (
            <span className={classes.dragIcon}>
              <IconButton onClick={filePicker} color="primary">
                <CloudUploadOutlinedIcon></CloudUploadOutlinedIcon>
              </IconButton>
              <span>{"DRAG FILE HERE OR BROWSE"}</span>
            </span>
          )}
          <input
            type="file"
            accept=".xls, .xlsx"
            ref={inputRef}
            onChange={(e) => handleFileChange(e.target.files[0])}
            hidden
          />
        </span>
      ) : (
        <GeneralTable data={excelData} />
      )}
    </>
  );
}

export default ExcelImport;
