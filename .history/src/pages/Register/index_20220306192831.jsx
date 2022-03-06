import {useSetRecoilState} from "recoil";
import {IsLoggedInState} from "../../state/atoms";
import { useNavigate } from "react-router-dom"
import { Grid, Paper, Avatar, TextField, Checkbox, FormControlLabel, Button, Link, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/AddCircleOutline';

const Register = () => {
  const navigate = useNavigate();
  const setLoggedIn = useSetRecoilState(IsLoggedInState)
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
      margin: '8px 0',
  };
  const fieldStyle = {
    margin: '8px 0'
};

  const handleLogin = () => {
    // TODO: auth with server side
    setLoggedIn(true);
    navigate("/home")
  }
  return (
    <Grid>
      
    </Grid>>
      <Grid align="center">
        <Paper elevation={10} style={paperStyle}>
          <Avatar style={avaterStyle}>
            <AddIcon />
          </Avatar>
          <h2>Sign Up</h2>
          <Typography variant='caption'>Please fill this form to create an account</Typography>
          <form>
            <TextField fullwidth label='Name'/>
          </form>
          <Button variant="contained" style={btnStyle} color="secondary" fullWidth onClick={handleLogin}>
            SIGN IN
          </Button>
          <Typography><Link href="#">Forgot password?</Link></Typography>
          {/* TODO: change syntax*/}
          <Typography >Do you have an account?<Link href="#">Sign up</Link></Typography>
        </Paper>
      </Grid>
    </div>
  );
};
export default Register;
