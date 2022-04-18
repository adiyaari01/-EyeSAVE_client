import { useContext } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import ParentStep from "../ParentStep";
import ChildStep from "../ChildStep";
import EscortStep from "../EscortStep";
import Success from "../Success";
import { AppContext } from "../../../context";

const handleSteps = (step) => {
  switch (step) {
    case 0:
      return <ParentStep />;
    case 1:
      return <ChildStep />;
    case 2:
      return <EscortStep />;
    default:
      throw new Error("Unknown step");
  }
};

const StepForm = () => {
  const { activeStep, labels } = useContext(AppContext);

  return (
    <>
      {activeStep === labels.length ? (
        <Success />
      ) : (
        <>
          <Stepper activeStep={activeStep} sx={{ py: 3}} alternativeLabel>
            {labels.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {handleSteps(activeStep)}
        </>
      )}
    </>
  );
};

export default StepForm;

