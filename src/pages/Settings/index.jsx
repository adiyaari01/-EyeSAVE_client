import * as React from "react";
import { useState } from "react";
import { updateSettings } from "../../api";
import DateMomentUtils from "@date-io/moment";
import { TimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import "./styles.css";

import { TextField, Grid, Paper, Avatar, Button } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

const Settings = () => {
  const [startMorning, setStartMorning] = useState(new Date());
  const [endMorning, setEndMorning] = useState(new Date());
  const [startNoon, setStartNoon] = useState(new Date());
  const [endNoon, setEndNoon] = useState(new Date());
  const [cameraName1, setCameraName1] = useState();
  const [cameraLink1, setCameraLink1] = useState();
  const [cameraName2, setCameraName2] = useState();
  const [cameraLink2, setCameraLink2] = useState();
  const [cameraName3, setCameraName3] = useState();
  const [cameraLink3, setCameraLink3] = useState();


  const handleSubmit = async () => {
    const settings = {
      _id: "6267f40027a29b9d4294a708",
      _startMorning: `${startMorning.getHours()}:${startMorning.getMinutes()}`,
      _endMorning: `${endMorning.getHours()}:${endMorning.getMinutes()}`,
      _startNoon: `${startNoon.getHours()}:${startNoon.getMinutes()}`,
      _endNoon: `${endNoon.getHours()}:${endNoon.getMinutes()}`,
      _cameraName1: cameraName1,
      _cameraLink: cameraLink1,
      _cameraName2: cameraName2,
      _cameraLink: cameraLink2,
      _cameraName3: cameraName3,
      _cameraLink: cameraLink3,
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
    // height: "105vh",
    margin: "10px auto",
    backgroundColor: "#E5E5E5",
  };
  const avaterStyle = {
    backgroundColor: "#BC88C9",
    color: "#E5E5E5",
  };
  const btnStyle = {
    margin: "25px 0",
    fontFamily: "Helvetica",
    color: "#E5E5E5",
  };

  return (
    <div>
      <Grid align="center">
        <Paper elevation={10} style={paperStyle}>
          <Avatar style={avaterStyle}>
            <SettingsIcon />
          </Avatar>
          <h3 style={{ color: "#3F424C" }}>Settings</h3>
          <form>
            <MuiPickersUtilsProvider utils={DateMomentUtils}>
              <div align="left">
                <h3 style={{ color: "#3F424C" }}>Morning Attendance</h3>
                <div className="times">
                  <div className="start">
                    <h3 style={{ color: "#3F424C" }}>Start Time</h3>
                    <TimePicker
                      value={startMorning}
                      onChange={setStartMorning}
                    />
                  </div>
                  <div className="end">
                    <h3 style={{ color: "#3F424C" }}>End Time</h3>
                    <TimePicker value={endMorning} onChange={setEndMorning} />
                  </div>
                </div>
              </div>

              <div align="left">
                <h3 style={{ color: "#3F424C" }}>Noon Attendance</h3>
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
                <h3 style={{ color: "#3F424C" }}>Yard Activity</h3>
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
{/* 
              <div align="left">
                <h3 style={{ color: "#3F424C" }}>Cameras</h3>
                <div className="times">
                  <div className="start">
                    <TextField
                      id="standard-basic"
                      label="Name"
                      variant="standard"
                      value={cameraName1}
                      onChange={setCameraName1}
                    />
                  </div>
                  <div className="end">
                    <TextField
                      id="standard-basic"
                      label="Link"
                      variant="standard"
                      value={cameraLink1}
                      onChange={setCameraLink1}
                    />
                  </div>
                </div>
                <div className="times">
                  <div className="start">
                    <TextField
                      id="standard-basic"
                      label="Name"
                      variant="standard"
                      value={cameraName2}
                      onChange={setCameraName2}
                    />
                  </div>
                  <div className="end">
                    <TextField
                      id="standard-basic"
                      label="Link"
                      variant="standard"
                      value={cameraLink2}
                      onChange={setCameraLink2}
                    />
                  </div>
                </div>
                <div className="times">
                  <div className="start">
                    <TextField
                      id="standard-basic"
                      label="Name"
                      variant="standard"
                      value={cameraName3}
                      onChange={setCameraName3}
                    />
                  </div>
                  <div className="end">
                    <TextField
                      id="standard-basic"
                      label="Link"
                      variant="standard"
                      value={cameraLink3}
                      onChange={setCameraLink3}
                    />
                  </div>
                </div>
              </div> */}
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
