import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ExcelImport from "../ExcelImport/ExcelImport";
import classes from "./Steper.module.css";
import GeneralTable from "../GeneralTable/GeneralTable";

function Steper({ steps }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  
  const [editTableData, setEditTableData] = React.useState();
  const handleImportedData = (data) => {
    setEditTableData(data);
    handleComplete();
  };

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box className={classes.stepContainerBox}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton onClick={handleStep(index)}>{label}</StepButton>
          </Step>
        ))}
      </Stepper>
      {allStepsCompleted() ? (
        <div className={classes.stepReset}>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box className={classes.stepCompletedContainerBox}>
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </div>
      ) : (
        <div className={classes.stepContainer}>
          <Typography className={classes.stepTypography}>
            {activeStep === 0 ? (
              <ExcelImport handleImportedData={handleImportedData} />
            ) : activeStep === 1 ? (
              <GeneralTable data={editTableData} />
            ) : (
              "Step " + (activeStep + 1)
            )}
          </Typography>
          <Box className={classes.steperButtons}>
            <Button
              className={classes.steperBackButton}
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Back
            </Button>
            <div>
              <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography
                    variant="caption"
                    className={classes.alreadyCompleted}
                  >
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? "Finish"
                      : "Complete Step"}
                  </Button>
                ))}
            </div>
          </Box>
        </div>
      )}
    </Box>
  );
}
export default Steper;
