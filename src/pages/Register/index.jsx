import { useSetRecoilState } from "recoil";
import React, { useState } from "react";
import { IsLoggedInState } from "../../state/atoms";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/AddCircleOutline";
import { signUp } from "../../api";
import { CostExplorer } from "aws-sdk";

const Register = () => {
  const navigate = useNavigate();
  const setLoggedIn = useSetRecoilState(IsLoggedInState);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState("");

  const paperStyle = {
    padding: 20,
    width: 300,
    // height: "80vh",
    margin: "50px auto",
  };
  const avaterStyle = {
    backgroundColor: "#BC88C9",
  };
  const btnStyle = {
    margin: "8px 0",
  };
  const fieldStyle = {
    margin: "8px 0",
  };

  const checkFields = () => {
    if (password === confirmPassword) return true;
    //TODO: add checking empty fields
    return false;
  };

  const fileToBase64 = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        resolve(reader.result);
      };
    });
  };
  const handleSignUp = async (event) => {
    event.preventDefault();

    const base64 = await fileToBase64(image);


    
    // TODO: auth with server side
    if (!checkFields()) return;
    const employee = {
      _firstName: firstName,
      _lastName: lastName,
      _id: id,
      _email: email,
      _phoneNumber: phoneNumber,
      _address: address,
      _password: password,
      _imageUrl: base64,
    };
    const res = await signUp(employee);
    console.log("handleSignUp: ", res);
    setLoggedIn(true);
    navigate("/");
  };
  console.log(image);
  return (
    <div>
      <Grid align="center">
        <Paper elevation={10} style={paperStyle}>
          <Grid>
            <Avatar style={avaterStyle}>
              <AddIcon />
            </Avatar>
            <h2>Sign Up</h2>
            <Typography variant="caption" gutterBottom>
              Please fill this form to create an account
            </Typography>
          </Grid>
          <form>
            <TextField
              fullWidth
              id="standard-basic"
              label="First Name"
              variant="standard"
              placeholder="Enter your first name"
              onChange={() => {
                setFirstName(event.target.value);
              }}
            />
            <TextField
              fullWidth
              id="standard-basic"
              label="Last Name"
              variant="standard"
              placeholder="Enter your last name"
              onChange={() => {
                setLastName(event.target.value);
              }}
            />
            <TextField
              fullWidth
              id="standard-basic"
              label="ID"
              variant="standard"
              placeholder="Enter your ID"
              onChange={() => {
                setId(event.target.value);
              }}
            />
            <TextField
              fullWidth
              id="standard-basic"
              label="Email"
              variant="standard"
              placeholder="Enter your email"
              onChange={() => {
                setEmail(event.target.value);
              }}
            />
            <TextField
              fullWidth
              id="standard-basic"
              label="Phone Number"
              variant="standard"
              placeholder="Enter your phone number"
              onChange={() => {
                setPhoneNumber(event.target.value);
              }}
            />
            <TextField
              fullWidth
              id="standard-basic"
              label="Address"
              variant="standard"
              placeholder="Enter your address"
              onChange={() => {
                setAddress(event.target.value);
              }}
            />
            <TextField
              fullWidth
              id="standard-basic"
              label="Password"
              variant="standard"
              placeholder="Enter a password"
              onChange={() => {
                setPassword(event.target.value);
              }}
            />
            <TextField
              fullWidth
              id="standard-basic"
              label="Confirm Password"
              variant="standard"
              placeholder="Enter again your password"
              onChange={() => {
                setConfirmPassword(event.target.value);
              }}
            />
            <TextField
              fullWidth
              id="standard-basic"
              label="Confirm Password"
              variant="standard"
              placeholder="Enter again your password"
              type="file"
              onChange={() => {
                setImage(event.target.files[0]);
              }}
            />
            <FormControlLabel
              control={<Checkbox defaultChecked color="default" />}
              label="I accept the terms and conditions."
            />
            <Button
              type="button"
              variant="contained"
              style={btnStyle}
              color="secondary"
              fullWidth
              onClick={handleSignUp}
            >
              SIGN UP
            </Button>
          </form>
        </Paper>
      </Grid>
    </div>
  );
};
export default Register;
