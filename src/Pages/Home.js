import React, { useState } from "react";
import AddFlateFile from "../Components/AddFlateFile";
import DataTableOne from "../Components/DataTableOne";
import DataValidate from "../Components/DataValidate";
import FinalList from "../Components/FinalList";
import { Stepper, Step, StepLabel, Button } from "@material-ui/core";

function Home() {
  const [json, setJson] = useState([]);
  const [confirmJson, setConfirmJson] = useState({});
  const [ignoredJson, setIgnoredJson] = useState([]);
  const [activeStep, setActiveStep] = useState(1);
  const [changedColumnJson, setChangedColumnJson] = useState({});
  const [showStepper, setShowStepper] = useState(false);

  const setJsonData = (value) => {
    setJson(value);
  };

  const setConfirmJsonData = (value) => {
    setConfirmJson(value);
  };

  const setIgnoredJsonData = (value) => {
    setIgnoredJson([...ignoredJson, value]);
  };

  const setStepperVisiblity = (value) => {
    setShowStepper(value);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setJson([]);
    setShowStepper(false);
  };

  const getSteps = () => {
    return ["Upload", "Match", "Review", "Complete"];
  };
  const steps = getSteps();

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return "";
      case 1:
        return (
            <DataValidate
              json={json}
              confirmJson={confirmJson}
              ignoredJson={ignoredJson}
              setConfirmJsonData={setConfirmJsonData}
              setIgnoredJsonData={setIgnoredJsonData}
              changedColumnJson={changedColumnJson}
              setChangedColumnJson={setChangedColumnJson}
          />
        );
      case 2:
        return (
          <FinalList
            json={json}
            confirmJson={Object.entries(confirmJson)}
            ignoredJson={ignoredJson}
          />
        );
      case 3:
        return (
          <FinalList
            json={json}
            confirmJson={Object.entries(confirmJson)}
            ignoredJson={ignoredJson}
          />
        );
      default:
        return "Unknown stepIndex";
    }
  };
  // console.log("confirmJson", confirmJson);
  // console.log("ignoredJson", ignoredJson);
  return (
    <div>
      {json.length === 0 ? (
        <AddFlateFile setJsonData={setJsonData} />
      ) : !showStepper ? (
        <DataTableOne
          json={json}
          stepperVisiblity={setStepperVisiblity}
          setJsonData={setJsonData}
        />
      ) : null}

      {showStepper ? (
        <div>
          <Stepper
            activeStep={activeStep}
            style={{
              width: "50%",
              justifyContent: "flex-end",
              float: "right",
              marginRight: "5%",
            }}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div>
            {activeStep === steps.length ? (
              <div>
                <FinalList
                  json={json}
                  confirmJson={Object.entries(confirmJson)}
                  ignoredJson={ignoredJson}
                />
                <Button onClick={handleReset} variant="contained">
                  Reset
                </Button>
              </div>
            ) : (
              <div>
                <div>{getStepContent(activeStep)}</div>
                <div
                  style={{
                    marginRight: "90px",
                    marginLeft: "90px",
                    marginBottom: "50px",
                  }}
                >
                  <Button
                    disabled={activeStep === 0 || activeStep === 1}
                    variant="contained"
                    onClick={handleBack}
                    style={{ marginRight: "30px" }}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : null}
      {/* <DataValidate json={json} /> */}
      {/* <FinalList json={json} /> */}
    </div>
  );
}

export default Home;
