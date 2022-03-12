import React, { useCallback, useContext } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/AddAPhoto";
import AddIcon from "@mui/icons-material/AddCircle";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { AppContext } from "../../../context";

const Input = styled("input")({
  display: "none"
});

export default function ThirdStep() {
  const {
    formValues,
    handleChange,
    handleBack,
    // handleSubmit,
    handleNext,
    variant,
    margin
  } = useContext(AppContext);
  const { firstName, lastName, phone, agreenemt, photo } = formValues.escort;

  // Check if all values are not empty and if there are some errors
  const isError = useCallback(
    () =>
      Object.keys({ firstName, lastName, phone, agreenemt, photo }).some(
        (name) =>
          (formValues.escort[name].required &&
            !formValues.escort[name].value) ||
          formValues.escort[name].error
      ),
    [formValues, firstName, lastName, phone, agreenemt, photo]
  );

  const handleEvent = (e, checked = null) => handleChange(e, checked, "escort");

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="First Name"
            name="firstName"
            placeholder="Enter escort first name"
            value={firstName.value}
            onChange={handleEvent}
            error={!!firstName.error}
            helperText={firstName.error}
            required={firstName.required}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Last Name"
            name="lastName"
            placeholder="Enter escort last name"
            value={lastName.value}
            onChange={handleEvent}
            error={!!lastName.error}
            helperText={lastName.error}
            required={lastName.required}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Phone number"
            name="phone"
            placeholder="i.e: xxx-xxx-xxxx"
            value={phone.value}
            onChange={handleEvent}
            error={!!phone.error}
            helperText={phone.error}
            required={phone.required}
          />
        </Grid>

        <Grid item xs={12}>
          <label htmlFor="escort-image">
            <Input
              name="photo"
              required={photo.required}
              accept="image/*"
              id="escort-image"
              type="file"
              onChange={handleEvent}
            />
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera fontSize="large" />
            </IconButton>
            Upload Photo
          </label>
        </Grid>

        <Grid item xs={12}>
          <label htmlFor="add-escort">
            <Input accept="image/*" id="add-escort" type="file" />
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <AddIcon fontSize="large" />
            </IconButton>
            Add Escort
          </label>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <FormControlLabel
          control={
            <Checkbox
              checked={agreenemt.value}
              onChange={handleEvent}
              name="agreenemt"
              color="primary"
              required={agreenemt.required}
            />
          }
          label="Agree to terms and conditions"
        />
        <FormHelperText error={!!agreenemt.error}>
          {agreenemt.error}
        </FormHelperText>
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
        <Button sx={{ mr: 1 }} onClick={handleBack}>
          Back
        </Button>
        <Button
          variant="contained"
          disabled={isError()}
          color="primary"
          onClick={!isError() ? handleNext : () => null}
        >
          Submit
        </Button>
      </Box>
    </>
  );
}
