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
import { useDispatch, useSelector } from "react-redux";
import {
  selectActiveStep,
  selectTableDatas,
  setActiveStep,
  setTableData,
  updateTableData,
} from "../../store/steper/steperSlice";
import { useState } from "react";

function Steper({ steps, handleData }) {
  const activeStep = useSelector(selectActiveStep);
  const [completed, setCompleted] = useState({});

  const tableDatas = useSelector(selectTableDatas);
  const dispatch = useDispatch();

  const handleImportedData = (data) => {
    dispatch(setTableData({ tableDatas: data }));
    handleComplete();
  };

  const handleEditData = (rowIndex, name, value) => {
    dispatch(updateTableData({ rowIndex, name, value }));
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
    dispatch(setActiveStep({ activeStep: newActiveStep }));
  };

  const handleBack = () => {
    dispatch(
      setActiveStep({ activeStep: (prevActiveStep) => prevActiveStep - 1 })
    );
  };

  const handleStep = (step) => () => {
    dispatch(setActiveStep({ activeStep: step }));
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
    dispatch(setActiveStep({ activeStep: 0 }));
    setCompleted({});
  };

  const handlePostData = () => {
    handleData(tableDatas);
  };

  const renderStep = (activeStep) => {
    let component;
    switch (activeStep) {
      case 0:
        component = <ExcelImport handleImportedData={handleImportedData} />;
        break;
      case 1:
        component = (
          <GeneralTable
            data={tableDatas}
            editAble={true}
            handleEditData={handleEditData}
          />
        );
        break;
      default:
        component = <GeneralTable data={tableDatas} editAble={false} />;
    }
    return component;
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
            <Button onClick={handleReset}>
              {STRINGS.moromiImport.resetBtn}
            </Button>
          </Box>
        </div>
      ) : (
        <div className={classes.stepContainer}>
          <div className={classes.stepTypography}>{renderStep(activeStep)}</div>
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
