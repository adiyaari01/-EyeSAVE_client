import * as React from "react";
import { useState } from "react";
import {updateSettings} from "../../api"
import DateMomentUtils from "@date-io/moment";
import { TimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import "./styles.css";

import {
  Grid,
  Paper,
  Avatar,
  Button,
} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';

const Settings = () => {
  const [startMorning, setStartMorning] = useState(new Date());
  const [endMorning, setEndMorning] = useState(new Date());
  const [startNoon, setStartNoon] = useState(new Date());
  const [endNoon, setEndNoon] = useState(new Date());

  const handleSubmit = async () => {
    const settings = {
      _id: "6267f40027a29b9d4294a708",
      _startMorning: `${startMorning.getHours()}:${startMorning.getMinutes()}`,
      _endMorning: `${endMorning.getHours()}:${endMorning.getMinutes()}`,
      _startNoon: `${startNoon.getHours()}:${startNoon.getMinutes()}`,
      _endNoon: `${endNoon.getHours()}:${endNoon.getMinutes()}`,
    };
    console.log(settings._startMorning);
    const res = await updateSettings(settings);

    if (res.data.success) {
      alert("message send");
      setForm({});
    }
  };

  const paperStyle = {
    padding: 10,
    width: 480,
    height: "105vh",
    margin: "10px auto",
  };
  const avaterStyle = {
    backgroundColor: "#BC88C9",
  };
  const btnStyle = {
    margin: "25px 0",
  };



  return (
    <div>
      <Grid align="center">
        <Paper elevation={10} style={paperStyle}>
          <Avatar style={avaterStyle}>
            <SettingsIcon />
          </Avatar>
          <h2>Settings</h2>
          <form>
          <MuiPickersUtilsProvider utils={DateMomentUtils}>
          <div align="left">
              <h2 style={{ color: "#3F424C" }}>Morning Attendance</h2>
              <div className="times">
              <div className="start">
              <h3 style={{ color: "#3F424C" }}>Start Time</h3>
              <TimePicker value={startMorning} onChange={setStartMorning} />
              </div>
              <div className="end">
              <h3 style={{ color: "#3F424C" }}>End Time</h3>
              <TimePicker value={endMorning} onChange={setEndMorning} />
              </div>
              </div>
            </div>

            <div align="left">
              <h2 style={{ color: "#3F424C" }}>Noon Attendance</h2>
              <div className="times">
              <div className="start">
              <h3 style={{ color: "#3F424C" }}>Start Time</h3>
              <TimePicker value={startNoon} onChange={setStartNoon} />
              </div>
              <div className="end">
              <h3 style={{ color: "#3F424C" }}>End Time</h3>
              <TimePicker value={endNoon} onChange={setEndNoon} />
              </div>
              </div>
            </div>
            
            <div align="left">
            <h2 style={{ color: "#3F424C" }}>Yard Activity</h2>
              <div className="times">
                <div className="start">
              <h3 style={{ color: "#3F424C" }}>Start Time</h3>
              <TimePicker value={startNoon} onChange={setStartNoon} />
              </div>
              <div className="end">
              <h3 style={{ color: "#3F424C" }}>End Time</h3>
              <TimePicker value={endNoon} onChange={setEndNoon} />
              </div>
              </div>
            </div>

          </MuiPickersUtilsProvider>
          </form>
          <Button
            variant="contained"
            style={btnStyle}
            color="secondary"
            onClick={handleSubmit}
          >
            OK
          </Button>
        </Paper>
      </Grid>
    </div>
  );
};
export default Settings;
