import Steper from "../../../components/Steper/Steper";
import classes from "./MoromiImport.module.css";
import * as STEPS from "../../../constants/steps";
import { useState } from "react";
function MoromiImport() {
  const steps = STEPS.moromiSteps;
  return (
    <div className={classes.step}>
      <Steper steps={steps} />
    </div>
  );
}

export default MoromiImport;
