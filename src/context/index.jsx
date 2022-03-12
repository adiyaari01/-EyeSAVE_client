import React, { useState, createContext } from "react";
import { initialValues } from "./initialize";

const isText = RegExp(/^[A-Z ]+$/i);
const isEmail = RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
const isPhone = RegExp(/^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4,6})$/); // us
const isZip = RegExp(/^[0-9]{5}([- /]?[0-9]{4})?$/); // us
const isNumber = RegExp(/^\d+$/);

const variant = "standard";
const margin = "normal";

const labels = ["Parent Step", "Child Step", "Escort Step"];

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState(initialValues);

  // Proceed to next step
  const handleNext = () => setActiveStep((prev) => prev + 1);
  // Go back to prev step
  const handleBack = () => setActiveStep((prev) => prev - 1);

  // Handle form change
  const handleChange = (event, checked, stateName) => {
    const { type, name, value, files } = event.target;

    const fieldValue =
      type === "checkbox" ? checked : type === "file" ? files[0] : value;
    const cloneValues = JSON.parse(JSON.stringify(formValues));
    const fieldName = initialValues[stateName][name];
    if (!fieldName) return;

    const { required, validate, minLength, maxLength, helperText } = fieldName;

    let error = "";

    if (required && !fieldValue) error = "This field is required";
    if (minLength && value && value.length < minLength)
      error = `Minimum ${minLength} characters is required.`;
    if (maxLength && value && value.length > maxLength)
      error = "Maximum length exceeded!";
    if (validate) {
      switch (validate) {
        case "text":
          if (value && !isText.test(value))
            error = helperText || "This field accepts text only.";
          break;

        case "number":
          if (value && !isNumber.test(value))
            error = helperText || "This field accepts numbers only.";
          break;

        case "email":
          if (value && !isEmail.test(value))
            error = helperText || "Please enter a valid email address.";
          break;

        case "phone":
          if (value && !isPhone.test(value))
            error =
              helperText ||
              "Please enter a valid phone number. i.e: xxx-xxx-xxxx";
          break;

        case "zip":
          if (value && !isZip.test(value))
            error = helperText || "Please enter a valid zip code.";
          break;

        case "checkbox":
          if (!checked) error = helperText || "Please provide a valid value.";
          break;

        case "select":
          if (!value) error = helperText || "Please select a value.";
          break;

        default:
          break;
      }
    }

    cloneValues[stateName][name] = {
      ...cloneValues[stateName][name],
      value: fieldValue,
      error
    };
    setFormValues(cloneValues);
  };

  return (
    <AppContext.Provider
      value={{
        labels,
        activeStep,
        formValues,
        handleChange,
        handleNext,
        handleBack,
        variant,
        margin
      }}
    >
      <div className="mui-step-form">{children}</div>
    </AppContext.Provider>
  );
};
export { AppProvider, AppContext };
