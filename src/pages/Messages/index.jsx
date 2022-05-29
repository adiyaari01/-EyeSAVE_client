import * as React from "react";
import { useState } from "react";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { escortsInfoState, staffInfoState } from "../../state/atoms";
import { postForm } from "../../api";
import "./styles.css"

import {
  Typography,
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Box,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";
import MessageIcon from "@mui/icons-material/MailOutline";
// const {VITE_BASE_URL} = process.env;
const REGISTRATION_FORM = "https://eyesave.netlify.app/ChildForm/";
const ADD_ESCORT_FORM = "https://eyesave.netlify.app/AddEscort/";

const Messages = () => {
  const allEscorts = useRecoilValue(escortsInfoState);
  const allEmployees = useRecoilValue(staffInfoState);

  const [form, setForm] = useState({});


  const handleFormsButton = async (link) => {
    const idForm = await postForm();
    setForm({ ...form, msg: `${link}${idForm.body.formId}` })
  }
  
  // filter all parents
  const handleSubmit = async () => {
    if(!form.userId){ 
      alert("Must Conain User")
      return;
    }
    if (form.userId == "AllParents") {
      const res = await axios({
        method: "post",
        // url: `${VITE_BASE_URL}/escort/sendToMany`,
        url: "https://eye-save-notifications.herokuapp.com/escort/sendToMany",
        data: {
          msg: form.msg,
        },
        withCredentials: true
      });
      return;
    }
    const res = await axios({
      method: "post",
      // url: `${VITE_BASE_URL}/escort/send`,
      url: "https://eye-save-notifications.herokuapp.com/escort/send",
      data: {
        userId: form.userId,
        msg: form.msg,
      },
      withCredentials: true
    });

    if (res.data.success) {
      alert("message send");
      setForm({});
    }
  };

  const parents = allEscorts.filter((item) => {
    return item._relation === "Parent" && item._telegramID;
  });

  const staff = allEmployees.filter((employee) => {
    return employee._telegramID;
  });

  const paperStyle = {
    padding: 20,
    maxWidth: 480,
    margin: "30px auto",
    backgroundColor:"#E5E5E5",
  };
  const avaterStyle = {
    backgroundColor: "#BC88C9",
  };
  const btnStyle = {
    margin: "8px 0",
    fontFamily: "Helvetica",
    color:"#E5E5E5",
  };
  const fieldStyle = {
    margin: "8px 0",
  };

  return (
    <div>
      <Typography
        sx={{ fontSize: "25px", color: "#A2A4A7", m: "20px" }}
        align={"left"}
      >
        Messages
      </Typography>
      <Grid align="center">
        <Paper elevation={10} style={paperStyle}>
          <Avatar style={avaterStyle}>
            <MessageIcon />
          </Avatar>
          <h2>Send Message</h2>
          <Box sx={{ minWidth: 120, textAlign: "left" }}>
            <FormControl>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue={"AllParents"}
                sx={{
                  color: "#3F414D",
                  width: "100%",
                  minWidth: "150px",
                  height: "30px",
                  mt: "20px",
                }}
                onChange={(e) => {
                  setForm({ ...form, userId: e.target.value });
                }}
              >
                <MenuItem value={"AllParents"}>All Parents</MenuItem>
                {parents.map((parent, i) => {
                  const parentFullName = `${parent._firstName} ${parent._lastName}`;
                  return (
                    <MenuItem value={parent._telegramID} key={i}>
                      {parentFullName}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <div>
            <div className="left">
            <input type="radio" id="html" name="fav_language" value="HTML" onClick={ () => handleFormsButton(REGISTRATION_FORM)}></input>
            <label for="html">Registration form</label>
          </div>
          <div  className="left">
            <input type="radio" id="html" name="fav_language" value="HTML" onClick={ () => handleFormsButton(ADD_ESCORT_FORM)}></input>
            <label for="html">Escort form</label>
          </div>
            </div>
          
          </Box>
          <TextField
            style={fieldStyle}
            label="Text Message"
            placeholder="Enter your message"
            fullWidth
            required
            multiline
            value={form.msg || ""}
            rows={4}
            onChange={(e) => setForm({ ...form, msg: e.target.value })}
          ></TextField>
          <Button
            variant="contained"
            style={btnStyle}
            color="secondary"
            onClick={handleSubmit}
          >
            SEND
          </Button>
        </Paper>
      </Grid>
    </div>
  );
};
export default Messages;
