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
  Link,
  Typography,
} from "@mui/material";
import LockIcon from "@mui/icons-material/LockOutlined";
import { login } from "../../api";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const setLoggedIn = useSetRecoilState(IsLoggedInState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const paperStyle = {
    padding: 20,
    width: 280,
    height: "70vh",
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

  const handleLogin = async () => {
    login(email, password);
  };
  // TODO: auth with server side
  // setLoggedIn(true);
  // navigate("/")
  // const flag = await login(email, password);
  // console.log(flag);
  //     await axios({
  //       method: "POST",
  //       url: "http://localhost:8000/auth",
  //       data: {
  //         email: email,
  //         password: password,
  //       },
  //     });
  // };

  return (
    <div>
      <Grid align="center">
        <Paper elevation={10} style={paperStyle}>
          <Avatar style={avaterStyle}>
            <LockIcon />
          </Avatar>
          <h2>Sign In</h2>
          <TextField
            style={fieldStyle}
            label="Email"
            placeholder="Enter an email address"
            fullWidth
            required
            onChange={() => {
              setEmail(event.target.value);
            }}
          ></TextField>
          <TextField
            style={fieldStyle}
            label="Password"
            placeholder="Enter a password"
            type="password"
            fullWidth
            required
            onChange={() => {
              setPassword(event.target.value);
            }}
          ></TextField>
          <FormControlLabel
            control={<Checkbox defaultChecked color="default" />}
            label="remember me"
          />
          <Button
            variant="contained"
            style={btnStyle}
            color="secondary"
            fullWidth
            onClick={handleLogin}
          >
            SIGN IN
          </Button>
          <Typography>
            <Link href="#">Forgot password?</Link>
          </Typography>
          {/* TODO: change syntax*/}
          <Typography>
            Do you have an account?<Link href="#">Sign up</Link>
          </Typography>
        </Paper>
      </Grid>
    </div>
  );
};
export default Login;
