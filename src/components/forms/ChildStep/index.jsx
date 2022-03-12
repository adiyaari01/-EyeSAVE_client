import React, { useCallback, useContext } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/AddAPhoto";
import AddIcon from "@mui/icons-material/AddCircle";
import { AppContext } from "../../../context";

const Input = styled("input")({
  display: "none"
});
export default function SecondStep() {
  const {
    formValues,
    handleChange,
    handleBack,
    handleNext,
    variant,
    margin
  } = useContext(AppContext);
  const {
    firstName,
    lastName,
    id,
    address,
    date,
    gender,
    photo
  } = formValues.child;

  const isError = useCallback(
    () =>
      Object.keys({
        firstName,
        lastName,
        date,
        gender,
        id,
        address,
        photo
      }).some(
        (name) =>
          (formValues.child[name].required && !formValues.child[name].value) ||
          formValues.child[name].error
      ),
    [formValues, firstName, lastName, date, gender, id, address, photo]
  );

  const handleEvent = (e, checked = null) => handleChange(e, checked, "child");

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
            placeholder="Enter child first name"
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
            placeholder="Enter child last name"
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
            label="I.D."
            name="id"
            placeholder="Your Id"
            value={id.value}
            onChange={handleEvent}
            error={!!id.error}
            helperText={id.error}
            required={id.required}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
            label="Date of birth"
            name="date"
            type="date"
            defaultValue={date.value}
            onChange={handleEvent}
            required={date.required}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Address"
            name="address"
            placeholder="Your address"
            value={address.value}
            onChange={handleEvent}
            error={!!address.error}
            helperText={address.error}
            required={address.required}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            select
            SelectProps={{
              native: true
            }}
            label="Gender"
            name="gender"
            value={gender.value}
            onChange={handleEvent}
            error={!!gender.error}
            helperText={gender.error}
            required={gender.required}
          >
            <option value=""> </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <label htmlFor="child-image">
            <Input
              name="photo"
              required={photo.required}
              accept="image/*"
              id="child-image"
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

        <Grid item sm={12}>
          <label htmlFor="add-child">
            <Input accept="image/*" id="add-child" type="file" />
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <AddIcon fontSize="large" />
            </IconButton>
            Add Child
          </label>
        </Grid>
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
        <Button onClick={handleBack} sx={{ mr: 1 }}>
          Back
        </Button>
        <Button
          variant="contained"
          disabled={isError()}
          color="primary"
          onClick={!isError() ? handleNext : () => null}
        >
          Next
        </Button>
      </Box>
    </>
  );
}
