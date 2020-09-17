import React, { useState } from "react";
import AddFlateFile from "../Components/AddFlateFile";
import DataTableOne from "../Components/DataTableOne";
import DataValidate from "../Components/DataValidate";
import FinalList from "../Components/FinalList";
import SuccessMessage from "../Components/SuccessMessage";
import FinishButton from "../Components/FinishButton";

import { Stepper, Step, StepLabel, Button } from "@material-ui/core";

function Home() {
  const [json, setJson] = useState([]);
  const [confirmJson, setConfirmJson] = useState({});
  const [ignoredJson, setIgnoredJson] = useState([]);
  const [activeStep, setActiveStep] = useState(4);
  const [changedColumnJson, setChangedColumnJson] = useState({});
  const [finalJson, setFinalJson] = useState({});
  const [showStepper, setShowStepper] = useState(true);

  const setJsonData = (value) => {
    setJson(value);
    setShowStepper(true);
  };

  const setConfirmJsonData = (value) => {
    setConfirmJson(value);
  };

  const setIgnoredJsonData = (value) => {
    setIgnoredJson([...ignoredJson, value]);
  };

  const setToTheNextStep = (value) => {
    setActiveStep(value);
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
  const FirstComp = () => {
    if (json.length === 0) {
      return <AddFlateFile setJsonData={setJsonData} />;
    }
    if (json.length > 0) {
      return (
        <DataTableOne
          json={json}
          setToTheNextStep={setToTheNextStep}
          setJsonData={setJsonData}
        />
      );
    }
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <FirstComp />;
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
            confirmJson={Object.entries(changedColumnJson)}
            ignoredJson={ignoredJson}
            setFinalJson={setFinalJson}
          />
        );
      case 3:
        return (
          <SuccessMessage
            json={json}
            confirmJson={Object.entries(changedColumnJson)}
            ignoredJson={ignoredJson}
          />
        );
      default:
        return "Unknown stepIndex";
    }
  };
  return (
    <div>
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
              <FinishButton>
                <div style={{ height: "72px" }}>
                  <Button onClick={handleReset} variant="contained">
                    Reset
                  </Button>
                </div>
              </FinishButton>
            </div>
          ) : (
            <div>
              <div>{getStepContent(activeStep)}</div>
              <div
                style={{
                  marginRight: "90px",
                  marginLeft: "90px",
                  marginBottom: "50px",
                  textAlign: "right",
                  fontSize: "larger",
                }}
              >
                <Button
                  disabled={activeStep === 0}
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
                  disabled={json.length === 0}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
