import { extractEventHandlers } from "@mui/base";
import { Grid, Paper, Avatar, TextField, Button, Link, Typography } from "@mui/material";

const FirstChildParentForm = () => {
  const paperStyle = {
    padding: 20,
    width: 300,
    height: "75vh",
  };
  const btnStyle = {
      margin: '25px 0',
  };
  const fieldStyle = {
    margin: '8px 0'
};

  const handleSubmit = (event) => {
    console.log("!!!");
      axios({
      method: 'post',
      url: 'http://localhost:8000/children',
      data: {
        _id: parentId,
        _firstName: event.parentFirstName,
        _lastName: event.parentLastName,
        _phoneNumber: event.phoneNumber,
      }
    });
    axios({
      method: 'post',
      url: 'http://localhost:8000/escorts',
      data: {
          _id: event.childId,
          _firstName: event.childFirstName,
          _lastName: event.childLastName,
        }
    });
  }
  return (
    <div>
      <Grid align="center">
        <Paper elevation={10} style={paperStyle}>
          <form>
            {/* add typography to */}
            <Typography>Child details</Typography>
            <TextField fullWidth id="standard-basic" name="childFirstName" label="Child First Name" variant="standard" placeholder="Enter child first name" />
            <TextField fullWidth id="standard-basic" name="childLastName" label="Child Last Name" variant="standard" placeholder="Enter child lasr name" />
            <TextField fullWidth id="standard-basic" name="childId" label="Child Id" variant="standard" placeholder="Enter child Id" />
            <Typography marginTop="14px" >Parent details</Typography>
            <TextField fullWidth id="standard-basic" name="parentFirstName" label="Parent First Name" variant="standard" placeholder="Enter parent first name" />
            <TextField fullWidth id="standard-basic" name="parentLastName" label="Parent Laste Name" variant="standard" placeholder="Enter parent last name" />
            <TextField fullWidth id="standard-basic" name="parentId" label="Parent Id" variant="standard" placeholder="Endter parent Id" />
            <TextField fullWidth id="standard-basic" name="phoneNumber" label="Phone Numbe" variant="standard" placeholder="Enter parent phone number" />
            <Button type='submit' variant="contained" style={btnStyle} color="secondary" fullWidth onClick={handleSubmit}>
              Submit
            </Button>
          </form>
        </Paper>
      </Grid>
    </div>
  );
};
export default FirstChildParentForm;
