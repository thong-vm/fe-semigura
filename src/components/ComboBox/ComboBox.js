import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import classes from "./ComboBox.module.css";
import { useState } from "react";

export default function ComboBox({
  label,
  dataSource,
  handleOutput,
  valueSelected,
}) {
  const [value, setValue] = useState(valueSelected || dataSource[0]);
  const [inputValue, setInputValue] = useState(
    valueSelected?.label || dataSource[0]?.label
  );
  return (
    <div className={classes.comboBox}>
      <label className={classes.comboBoxLabel}>{label} </label>
      <Autocomplete
        value={value}
        isOptionEqualToValue={(option, value) => {
          return option.id === value.id;
        }}
        onChange={(event, newValue) => {
          handleOutput(newValue);
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        options={dataSource}
        sx={{ width: 200 }}
        renderInput={(params) => (
          <TextField style={{ fontSize: "10" }} {...params} />
        )}
      />
    </div>
  );
}
