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

export default function FirstStep() {
  const { formValues, handleChange, handleNext, variant, margin } = useContext(
    AppContext
  );
  const {
    firstName,
    lastName,
    email,
    phone,
    id,
    address,
    photo
  } = formValues.parent;

  // Check if all values are not empty and if there are some errors
  const isError = useCallback(
    () =>
      Object.keys({
        firstName,
        lastName,
        email,
        phone,
        id,
        address,
        photo
      }).some(
        (name) =>
          (formValues.parent[name].required &&
            !formValues.parent[name].value) ||
          formValues.parent[name].error
      ),
    [formValues, firstName, lastName, email, phone, id, address, photo]
  );

  const handleEvent = (e, checked = null) => handleChange(e, checked, "parent");

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
            placeholder="Your first name"
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
            placeholder="Your last name"
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

        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Email"
            name="email"
            placeholder="Your email address"
            type="email"
            value={email.value}
            onChange={handleEvent}
            error={!!email.error}
            helperText={email.error}
            required={email.required}
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

        <Grid item xs={12}>
          <label htmlFor="parent-image">
            <Input
              name="photo"
              required={photo.required}
              accept="image/*"
              id="parent-image"
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
          <label htmlFor="add-parent">
            <Input accept="image/*" id="add-parent" type="file" />
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <AddIcon fontSize="large" />
            </IconButton>
            Add Parent
          </label>
        </Grid>
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          sx={{ mt: 3, ml: 1 }}
          disabled={isError()}
          color="primary" // change to: #FCBD26
          onClick={!isError() ? handleNext : () => null}
        >
          Next
        </Button>
      </Box>
    </>
  );
}
