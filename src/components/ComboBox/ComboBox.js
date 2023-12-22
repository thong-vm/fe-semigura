import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import classes from "./ComboBox.module.css";

export default function ComboBox({ label, dataSource, handleOutput }) {
  const [value, setValue] = React.useState(dataSource[0]);
  const [inputValue, setInputValue] = React.useState("");
  return (
    <div className={classes.comboBox}>
      <label className={classes.comboBoxLabel}>{label} </label>
      <Autocomplete
        value={value}
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
