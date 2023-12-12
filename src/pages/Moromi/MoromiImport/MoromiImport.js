import Steper from "../../../components/Steper/Steper";
import classes from "./MoromiImport.module.css";
import * as STEPS from "../../../constants/steps";
function MoromiImport() {
  const steps = STEPS.moromiSteps;
  const handleData = (data) => {
    console.log("data :", data);
  };
  return (
    <div className={classes.step}>
      <Steper steps={steps} handleData={handleData} />
    </div>
  );
}

export default MoromiImport;
