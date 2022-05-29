import * as React from "react";
import { Container, Stack } from "@mui/material";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { childrenInfoState } from "../../state/atoms";
import { List } from "./List";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/AddCircleOutline";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, TextField, Button, Typography } from "@mui/material";
import { postChild, postEscort } from "../../api";
import useMediaQuery from "@mui/material/useMediaQuery";

export default () => {
  const matches = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [childFirstName, setChildFirstName] = React.useState("");
  const [childLastName, setChildLastName] = React.useState("");
  const [parentFirstName, setParentFirstName] = React.useState("");
  const [parentLastName, setParentLastName] = React.useState("");
  const [parentPhoneNumber, setParentPhoneNumber] = React.useState(0);
  const [childId, setChildId] = React.useState(0);
  const [parentId, setParentId] = React.useState(0);

  const allChildren = useRecoilValue(childrenInfoState);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    const child = {
      _firstName: childFirstName,
      _lastName: childLastName,
      _id: parseInt(childId),
      _escort: [parseInt(parentId)],
    };
    const parent = {
      _firstName: parentFirstName,
      _lastName: parentLastName,
      _id: parseInt(parentId),
      _phone: parentPhoneNumber,
      _children: [parseInt(childId)],
      _relation: "Parent",
    };
    await postChild(child);
    await postEscort(parent);
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
      <ArrowBackIcon
        sx={{
          color: "#BC88C9",
        }}
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/info")}
      ></ArrowBackIcon>
      <Typography
        align={!matches ? "center" : "left"}
        sx={{ fontSize: "25px", color: "#A2A4A7" }}
      >
        Children info
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
          Child and Parent Details
        </DialogTitle>
        <DialogContent sx={{ background: "#E3E3E3" }}>
          <form>
            <TextField
              onChange={() => {
                setChildFirstName(event.target.value);
              }}
              fullWidth
              id="standard-basic"
              name="childFirstName"
              label="Child First Name"
              variant="standard"
              placeholder="Enter child first name"
              type={"text"}
            />
            <TextField
              onChange={() => {
                setChildLastName(event.target.value);
              }}
              fullWidth
              id="standard-basic"
              name="childLastName"
              label="Child Last Name"
              variant="standard"
              placeholder="Enter child last name"
              type={"text"}
            />
            <TextField
              onChange={() => {
                setChildId(event.target.value);
              }}
              fullWidth
              id="standard-basic"
              name="childId"
              label="Child Id"
              variant="standard"
              placeholder="Enter child Id"
              type={"number"}
            />
            <TextField
              onChange={() => {
                setParentFirstName(event.target.value);
              }}
              fullWidth
              id="standard-basic"
              name="parentFirstName"
              label="Parent First Name"
              variant="standard"
              placeholder="Enter parent first name"
              type={"text"}
            />
            <TextField
              onChange={() => {
                setParentLastName(event.target.value);
              }}
              fullWidth
              id="standard-basic"
              name="parentLastName"
              label="Parent Laste Name"
              variant="standard"
              placeholder="Enter parent last name"
              type={"text"}
            />
            <TextField
              onChange={() => {
                setParentId(event.target.value);
              }}
              fullWidth
              id="standard-basic"
              name="parentId"
              label="Parent Id"
              variant="standard"
              placeholder="Enter parent Id"
              type={"number"}
            />
            <TextField
              onChange={() => {
                setParentPhoneNumber(event.target.value);
              }}
              fullWidth
              id="standard-basic"
              name="phoneNumber"
              label="Phone Numbe"
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
      <Stack direction={"row"} flexWrap="wrap" gap={3}></Stack>
      <List items={allChildren} />
    </Container>
  );
};
