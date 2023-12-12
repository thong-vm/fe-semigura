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
import * as STRINGS from "../../constants/string";

function Steper({ steps, handleData }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const [editTableData, setEditTableData] = React.useState([]);
  const handleImportedData = (data) => {
    setEditTableData(data);
    handleComplete();
  };
  const handleEditData = (rowIndex, name, value) => {
    const newData = [...editTableData];
    newData[rowIndex] = {
      ...newData[rowIndex],
      [name]: value,
    };
    setEditTableData(newData);
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
        ? steps.findIndex((step, i) => !(i in completed))
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
    if (completedSteps() === totalSteps()) {
      handlePostData();
    }
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const handlePostData = () => {
    handleData(editTableData);
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
          <div className={classes.stepTypography}>
            {activeStep === 0 ? (
              <ExcelImport handleImportedData={handleImportedData} />
            ) : activeStep === 1 ? (
              <GeneralTable
                data={editTableData}
                editAble={true}
                handleEditData={handleEditData}
              />
            ) : (
              <GeneralTable
                data={editTableData}
                editAble={false}
                handleEditData={handleEditData}
              />
            )}
          </div>
          <Box className={classes.steperButtons}>
            <Button
              className={classes.steperBackButton}
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              {STRINGS.moromiImport.backBtn}
            </Button>
            <div>
              <Button onClick={handleNext} sx={{ mr: 1 }}>
                {STRINGS.moromiImport.nextBtn}
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
                      ? STRINGS.moromiImport.finishBtn
                      : STRINGS.moromiImport.completeStepBtn}
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
