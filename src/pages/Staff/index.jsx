import * as React from "react";
import { Container, Stack } from "@mui/material";
import { useRecoilValue } from "recoil";
import { staffInfoState } from "../../state/atoms";
import { List } from "./List";
import AddIcon from "@mui/icons-material/AddCircleOutline";
import { postStaff } from "../../api";
import useMediaQuery from '@mui/material/useMediaQuery'
import {
  MenuItem,
  Select,
  FormControl,
  Box,
  Avatar,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography
} from "@mui/material";

export default () => {
  const matches = useMediaQuery('(min-width:600px)');
  const [open, setOpen] = React.useState(false);
  const [employeeFirstName, setEmployeeFirstName] = React.useState("");
  const [employeeLastName, setEmployeeLastName] = React.useState("");
  const [employeePhoneNumber, setEmployeePhoneNumber] = React.useState(0);
  const [employeeId, setEmployeeId] = React.useState(0);
  const [selectedPosition, setPosition] = React.useState("");

  const staff = useRecoilValue(staffInfoState);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const hadleDialog = (event) => {
    setPosition(event.target.value);
  };

  const handleSubmit = async () => {
    const employee = {
      _firstName: employeeFirstName,
      _lastName: employeeLastName,
      _id: parseInt(employeeId),
      _phone: employeePhoneNumber,
      _position: selectedPosition,
    };
    await postStaff(employee);
    handleClose();
    window.location.reload();
  };

  const avaterStyle = {
    backgroundColor: "#BC88C9",
  };

  const btnStyle = {
    margin: "8px 0",
  };

  return (
    <Container>
      <Typography align={!matches?"center":"left"} sx={{ fontSize: "25px", color: "#A2A4A7" }}>
        Staff info
      </Typography>
      <Button
        sx={{
          color: "#BC88C9",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
        onClick={handleClickOpen}
      >
        <Avatar style={avaterStyle}>
          <AddIcon />
        </Avatar>
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ background: "#E3E3E3" }}>
          Employee Details
        </DialogTitle>
        <DialogContent sx={{ background: "#E3E3E3" }}>
          <form>
            <TextField
              onChange={() => {
                setEmployeeFirstName(event.target.value);
              }}
              fullWidth
              id="standard-basic"
              name="cmployeeFirstName"
              label="Employee First Name"
              variant="standard"
              placeholder="Enter employee first name"
              type={"text"}
            />
            <TextField
              onChange={() => {
                setEmployeeLastName(event.target.value);
              }}
              fullWidth
              id="standard-basic"
              name="cmployeeLastName"
              label="Employee Last Name"
              variant="standard"
              placeholder="Enter employee lasr name"
              type={"text"}
            />
            <TextField
              fullWidth
              onChange={() => {
                setEmployeeId(event.target.value);
              }}
              id="standard-basic"
              name="EmployeeId"
              label="Employee Id"
              variant="standard"
              placeholder="Enter employee Id"
              type={"number"}
            />
            <TextField
              onChange={() => {
                setEmployeePhoneNumber(event.target.value);
              }}
              fullWidth
              id="standard-basic"
              name="phoneNumber"
              label="Phone Number"
              variant="standard"
              placeholder="Enter parent phone number"
              type={"number"}
            />
            <Box sx={{ minWidth: 120, textAlign: "left" }}>
              <FormControl>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectedPosition}
                  onChange={hadleDialog}
                  sx={{
                    color: "#3F414D",
                    width: "100%",
                    minWidth: "150px",
                    height: "30px",
                    mt: "20px",
                  }}
                >
                  <MenuItem value={"Teacher"}>Teacher</MenuItem>
                  <MenuItem value={"Assistant"}>Assistant</MenuItem>
                  <MenuItem value={"House keeper"}>House keeper</MenuItem>
                  <MenuItem value={"Manager"}>Manager</MenuItem>
                  <MenuItem value={"Other"}>Other</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </form>
        </DialogContent>
        <DialogActions sx={{ background: "#E3E3E3" }}>
          <Button
            style={{ margin: "15px", color: "#3F414D" }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            style={btnStyle}
            color="secondary"
            onClick={handleSubmit}
          >
            SUBMIT
          </Button>
        </DialogActions>
      </Dialog>
      <Stack
        justifyContent={"center"}
        direction={"row"}
        flexWrap="wrap"
        gap={3}
      ></Stack>
      <List items={staff} />
    </Container>
  );
};
