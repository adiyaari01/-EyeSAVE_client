import * as React from "react";
import { Container, Stack } from "@mui/material";
import { useRecoilValue } from "recoil";
import { escortsInfoState } from "../../state/atoms";
import { List } from "./List";
import AddIcon from "@mui/icons-material/AddCircleOutline";
import { postEscort } from "../../api";
import {
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
  const [open, setOpen] = React.useState(false);
  const [escortFirstName, setEscortFirstName] = React.useState("");
  const [escortLastName, setEscortLastName] = React.useState("");
  const [escortPhoneNumber, setEscortPhoneNumber] = React.useState(0);
  const [escortId, setEscortId] = React.useState(0);
  // const [selectedPosition, setPosition] = React.useState("");

  const staff = useRecoilValue(escortsInfoState);

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
    const escort = {
      _firstName: escortFirstName,
      _lastName: escortLastName,
      _id: parseInt(escortId),
      _phone: escortPhoneNumber,
    };
    await postEscort(escort);
    handleClose();
  };

  const avaterStyle = {
    backgroundColor: "#BC88C9",
  };

  const btnStyle = {
    margin: "8px 0",
  };

  return (
    <Container>
      <Typography sx={{ fontSize: "25px", color: "#A2A4A7" }}>
        Parents info
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
        <DialogTitle sx={{ background: "#E3E3E3" }}>Escort Details</DialogTitle>
        <DialogContent sx={{ background: "#E3E3E3" }}>
          <form>
            <TextField
              onChange={() => {
                setEscortFirstName(event.target.value);
              }}
              fullWidth
              id="standard-basic"
              name="cmployeeFirstName"
              label="Escort First Name"
              variant="standard"
              placeholder="Enter escort first name"
              type={"text"}
            />
            <TextField
              onChange={() => {
                setEscortLastName(event.target.value);
              }}
              fullWidth
              id="standard-basic"
              name="cmployeeLastName"
              label="Escort Last Name"
              variant="standard"
              placeholder="Enter escort lasr name"
              type={"text"}
            />
            <TextField
              fullWidth
              onChange={() => {
                setEscortId(event.target.value);
              }}
              id="standard-basic"
              name="EscortId"
              label="Escort Id"
              variant="standard"
              placeholder="Enter escort Id"
              type={"number"}
            />
            <TextField
              onChange={() => {
                setEscortPhoneNumber(event.target.value);
              }}
              fullWidth
              id="standard-basic"
              name="phoneNumber"
              label="Phone Number"
              variant="standard"
              placeholder="Enter parent phone number"
              type={"number"}
            />
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
