import { Button, CircularProgress, IconButton } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import * as XLSX from "xlsx";
import * as COLORS from "../../constants/colors";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import classes from "./ExcelImport.module.css";
import { useTranslation } from "react-i18next";
function ExcelImport({ handleImportedData }) {
  const { t } = useTranslation("excel_import");
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = async (files) => {
    try {
      setIsLoading(true);
      const file = files[0];
      const data = await file.arrayBuffer();
      const workbook = XLSX.read(data, { type: "binary" });
      const firstSheet = workbook.SheetNames[0];
      const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheet]);
      handleImportedData(sheetData);
      setIsLoading(false);
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

  useEffect(() => {}, [isLoading]);

  return (
    <div className={classes.dragContainer}>
      {isLoading ? (
        <CircularProgress sx={{ position: "absolute" }} />
      ) : (
        <div onDrop={handleDrop} onDragOver={handleDragOver}>
          <div className={classes.dragIcon}>
            <Button style={{ color: COLORS.primaryMain }} onClick={filePicker}>
              <CloudUploadOutlinedIcon
                color={COLORS.primaryMain}
              ></CloudUploadOutlinedIcon>
            </Button>
            <span>{t("DRAG_FILE_BTN")}</span>
          </div>

          <input
            type="file"
            accept=".xls, .xlsx"
            ref={inputRef}
            onChange={(e) => handleFileChange(e.target.files)}
            hidden
          />
        </div>
      )}
    </div>
  );
}

export default ExcelImport;
