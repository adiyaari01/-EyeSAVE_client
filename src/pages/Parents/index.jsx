import * as React from "react";
import { Container, Stack } from "@mui/material";
import { useRecoilValue } from "recoil";
import {useNavigate} from 'react-router-dom'
import { escortsInfoState } from "../../state/atoms";
import { List } from "./List";
import AddIcon from "@mui/icons-material/AddCircleOutline";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { postEscort } from "../../api";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Avatar,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

export default () => {
  const matches = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate(); 
  const [open, setOpen] = React.useState(false);
  const [parentFirstName, setparentFirstName] = React.useState("");
  const [parentLastName, setparentLastName] = React.useState("");
  const [parentPhoneNumber, setparentPhoneNumber] = React.useState(0);
  const [parentId, setparentId] = React.useState(0);
  const staff = useRecoilValue(escortsInfoState);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const hadleDialog = (event) => {
  //   setPosition(event.target.value);
  // };

  const handleSubmit = async () => {
    const parent = {
      _firstName: parentFirstName,
      _lastName: parentLastName,
      _id: parseInt(parentId),
      _phone: parentPhoneNumber,
      _relation: "Parent",
    };
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
          // display: "flex",
          // justifyContent: "center",
          // width: "100%",
        }}
        style={{ cursor: "pointer"}}
        onClick={() => navigate("/info")}
      ></ArrowBackIcon>
      <Typography
        align={!matches ? "center" : "left"}
        sx={{ fontSize: "25px", color: "#A2A4A7" }}
      >
        Escorts info
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
                setparentFirstName(event.target.value);
              }}
              fullWidth
              id="standard-basic"
              name="escortFirstName"
              label="Parent First Name"
              variant="standard"
              placeholder="Enter escort first name"
              type={"text"}
            />
            <TextField
              onChange={() => {
                setparentLastName(event.target.value);
              }}
              fullWidth
              id="standard-basic"
              name="escortLastName"
              label="Parent Last Name"
              variant="standard"
              placeholder="Enter escort lasr name"
              type={"text"}
            />
            <TextField
              fullWidth
              onChange={() => {
                setparentId(event.target.value);
              }}
              id="standard-basic"
              name="parentId"
              label="Parent Id"
              variant="standard"
              placeholder="Enter escort Id"
              type={"number"}
            />
            <TextField
              onChange={() => {
                setparentPhoneNumber(event.target.value);
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
