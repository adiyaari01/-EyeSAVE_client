import * as React from "react";
import { useState } from "react";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { escortsInfoState, staffInfoState } from "../../state/atoms";
import {
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

const Messages = () => {
  const allEscorts = useRecoilValue(escortsInfoState);
  const allEmployees = useRecoilValue(staffInfoState);

  const [form, setForm] = useState({});

  // filter all parents
  const handleSubmit = async () => {
    console.log("Submit", form);
    // loop

    const res = await axios({
      method: "post",
      // url: "http://localhost:8001/escort/send",
      url: 'https://eyesave-noitfications.herokuapp.com/escort/send',
      data: {
        userId: form.userId,
        msg: form.msg,
      },
    });

    if (res.data.success) {
      alert("message send");
      setForm({})
    }
  };

  console.log(allEscorts);

  const parents = allEscorts.filter((item) => {
    return item._relation === "Parent" && item._telegramID;
  });

  const staff = allEmployees.filter((employee) => {
    return employee._telegramID;
  });
  console.log(staff);

  const paperStyle = {
    padding: 20,
    width: 480,
    height: "60vh",
    margin: "30px auto",
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

  return (
    <div>
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
                sx={{
                  color: "#3F414D",
                  width: "100%",
                  minWidth: "150px",
                  height: "30px",
                  mt: "20px",
                }}
                onChange={(e) => {
                  console.log(e.target.value);
                  setForm({ ...form, userId: e.target.value });
                }}
              >
                <MenuItem value={"None"}>None</MenuItem>
                <MenuItem value={"All Parents"}>All Parents</MenuItem>
                {parents.map((parent, i) => {
                  return (
                    <MenuItem value={parent._telegramID} key={i}>
                      {parent._firstName} {parent._lastName}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
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
