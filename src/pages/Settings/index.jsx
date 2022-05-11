import * as React from "react";
import { memo } from "react";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import LightModeIcon from "@mui/icons-material/LightMode";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import VideoSettingsTwoToneIcon from "@mui/icons-material/VideoSettingsTwoTone";
import Grid from "@mui/material/Grid";
import { CardUseStyles } from "./GridUseStyles";
import Typography from "@mui/material/Typography";
import { Avatar, TextField, Button } from "@mui/material";
import DateMomentUtils from "@date-io/moment";
import { TimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { updateSettings } from "../../api";
import SettingsIcon from "@mui/icons-material/Settings";
import { getUserFromSessionStorage } from "../../utils";

export default memo(() => {
  const user = getUserFromSessionStorage();
  const cardClasses = CardUseStyles();
  const [openMorning, setOpenMorning] = React.useState(false);
  const [openYard, setOpenYard] = React.useState(false);
  const [openPickUp, setOpenPickUp] = React.useState(false);
  const [openCamera, setOpenCamera] = React.useState(false);
  const [startMorning, setStartMorning] = useState(new Date());
  const [endMorning, setEndMorning] = useState(new Date());
  const [startYard, setStartYard] = useState(new Date());
  const [endYard, setEndYard] = useState(new Date());
  const [startPickUp, setStartPickUp] = useState(new Date());
  const [endPickUp, setEndPickUp] = useState(new Date());
  const [cameraName1, setCameraName1] = React.useState("");
  const [cameraUrl1, setCameraUrl1] = React.useState("");
  const [cameraName2, setCameraName2] = React.useState("");
  const [cameraUrl2, setCameraUrl2] = React.useState("");
  const [cameraName3, setCameraName3] = React.useState("");
  const [cameraUrl3, setCameraUrl3] = React.useState("");

  const handleClickOpenMorning = () => {
    setOpenMorning(true);
  };

  const handleCloseMorning = () => {
    setOpenMorning(false);
  };

  const handleClickOpenYard = () => {
    setOpenYard(true);
  };

  const handleCloseYard = () => {
    setOpenYard(false);
  };

  const handleClickOpenPickUp = () => {
    setOpenPickUp(true);
  };

  const handleClosePickUp = () => {
    setOpenPickUp(false);
  };

  const handleClickOpenCamera = () => {
    setOpenCamera(true);
  };

  const handleCloseCamera = () => {
    setOpenCamera(false);
  };

  const handleSubmitMorning = async () => {
    const settings = {
      _id: "6267f40027a29b9d4294a708",
      _startMorning: `${startMorning.getHours()}:${startMorning.getMinutes()}`,
      _endMorning: `${endMorning.getHours()}:${endMorning.getMinutes()}`,
    };
    console.log("settings", settings);
    await updateSettings(settings);
    alert("Updated successfully");
    handleCloseMorning();
  };

  const handleSubmitYard = async () => {
    const settings = {
      _id: "6267f40027a29b9d4294a708",
      _startYard: `${startYard.getHours()}:${startYard.getMinutes()}`,
      _endYard: `${endYard.getHours()}:${endYard.getMinutes()}`,
    };
    await updateSettings(settings);
    alert("Updated successfully");
    handleCloseYard();
  };

  const handleSubmitPickUp = async () => {
    const settings = {
      _id: "6267f40027a29b9d4294a708",
      _startPickUp: `${startPickUp.getHours()}:${startPickUp.getMinutes()}`,
      _endPickUp: `${endPickUp.getHours()}:${endPickUp.getMinutes()}`,
    };
    await updateSettings(settings);
    alert("message send");
    handleClosePickUp();
  };

  const handleSubmitCamera = async () => {
    const settings = {
      _id: "6267f40027a29b9d4294a708",
      _cameraName1: cameraName1,
      _cameraUrl1: cameraUrl1,
      _cameraName2: cameraName2,
      _cameraUrl2: cameraUrl2,
      _cameraName3: cameraName3,
      _cameraUrl3: cameraUrl3,
    };
    await updateSettings(settings);
    alert("message send");
    handleCloseCamera();
  };

  const avaterStyle = {
    backgroundColor: "#BC88C9",
    justifyContent: "center",
  };

  const btnStyle = {
    margin: "8px 0",
  };

  return (
    <>
      <Typography sx={{ fontSize: "25px", color: "#A2A4A7", pb: 4 }}>
        Settings
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={10} sm={4} md={4} lg={3}>
          <Card
            align="center"
            classes={cardClasses}
            onClick={handleClickOpenMorning}
          >
            <CardHeader sx={{ color: "#FDCA51" }} title="Morning Time" />
            <CardContent>
              <LightModeIcon sx={{ fontSize: "80px" }} />
            </CardContent>
          </Card>
        </Grid>

        <Dialog open={openMorning} onClose={handleCloseMorning}>
          <DialogContent sx={{ background: "#E3E3E3" }}>
            {/* <Avatar style={avaterStyle}>
            <SettingsIcon />
          </Avatar> */}
            <form>
              <MuiPickersUtilsProvider utils={DateMomentUtils}>
                <div align="left">
                  <h3 style={{ color: "#3F424C" }}>Morning Time Settings</h3>
                  <div className="times">
                    <div className="start">
                      <h4 style={{ color: "#3F424C" }}>Start Time</h4>
                      <TimePicker
                        value={startMorning}
                        onChange={setStartMorning}
                      />
                    </div>
                    <div className="end">
                      <h4 style={{ color: "#3F424C" }}>End Time</h4>
                      <TimePicker value={endMorning} onChange={setEndMorning} />
                    </div>
                  </div>
                </div>
              </MuiPickersUtilsProvider>
            </form>
          </DialogContent>
          <DialogActions sx={{ background: "#E3E3E3" }}>
            <Button
              style={{ margin: "15px", color: "#3F414D" }}
              onClick={handleCloseMorning}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              style={btnStyle}
              color="secondary"
              onClick={handleSubmitMorning}
            >
              SUBMIT
            </Button>
          </DialogActions>
        </Dialog>

        <Grid item xs={10} sm={4} md={4} lg={3}>
          <Card
            align="center"
            classes={cardClasses}
            onClick={handleClickOpenYard}
          >
            <CardHeader sx={{ color: "#F868A3" }} title="Yard Time" />
            <CardContent>
              <LocalFloristIcon sx={{ fontSize: "80px" }} />
            </CardContent>
          </Card>
        </Grid>

        <Dialog open={openYard} onClose={handleCloseYard}>
          <DialogContent sx={{ background: "#E3E3E3" }}>
            {/* <Avatar style={avaterStyle}>
            <SettingsIcon />
          </Avatar> */}
            <form>
              <MuiPickersUtilsProvider utils={DateMomentUtils}>
                <div align="left">
                  <h3 style={{ color: "#3F424C" }}>Yard Time Settings</h3>
                  <div className="times">
                    <div className="start">
                      <h4 style={{ color: "#3F424C" }}>Start Time</h4>
                      <TimePicker value={startYard} onChange={setStartYard} />
                    </div>
                    <div className="end">
                      <h4 style={{ color: "#3F424C" }}>End Time</h4>
                      <TimePicker value={endYard} onChange={setEndYard} />
                    </div>
                  </div>
                </div>
              </MuiPickersUtilsProvider>
            </form>
          </DialogContent>
          <DialogActions sx={{ background: "#E3E3E3" }}>
            <Button
              style={{ margin: "15px", color: "#3F414D" }}
              onClick={handleCloseYard}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              style={btnStyle}
              color="secondary"
              onClick={handleSubmitYard}
            >
              SUBMIT
            </Button>
          </DialogActions>
        </Dialog>

        <Grid item xs={10} sm={4} md={4} lg={3}>
          <Card
            align="center"
            classes={cardClasses}
            onClick={handleClickOpenPickUp}
          >
            <CardHeader sx={{ color: "#c483d9" }} title="Pick-Up Time" />
            <CardContent>
              <FamilyRestroomIcon sx={{ fontSize: "80px" }} />
            </CardContent>
          </Card>
        </Grid>
        <Dialog open={openPickUp} onClose={handleClosePickUp}>
          <DialogContent sx={{ background: "#E3E3E3" }}>
            {/* <Avatar style={avaterStyle}>
            <SettingsIcon />
          </Avatar> */}
            <form>
              <MuiPickersUtilsProvider utils={DateMomentUtils}>
                <div align="left">
                  <h3 style={{ color: "#3F424C" }}>Pick-Up Time Settings</h3>
                  <div className="times">
                    <div className="start">
                      <h4 style={{ color: "#3F424C" }}>Start Time</h4>
                      <TimePicker
                        value={startPickUp}
                        onChange={setStartPickUp}
                      />
                    </div>
                    <div className="end">
                      <h4 style={{ color: "#3F424C" }}>End Time</h4>
                      <TimePicker value={endMorning} onChange={setEndPickUp} />
                    </div>
                  </div>
                </div>
              </MuiPickersUtilsProvider>
            </form>
          </DialogContent>
          <DialogActions sx={{ background: "#E3E3E3" }}>
            <Button
              style={{ margin: "15px", color: "#3F414D" }}
              onClick={handleClosePickUp}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              style={btnStyle}
              color="secondary"
              onClick={handleSubmitPickUp}
            >
              SUBMIT
            </Button>
          </DialogActions>
        </Dialog>

        {user?._position === "Manager" && (
          <>
            <Grid item xs={10} sm={4} md={4} lg={3}>
              <Card
                align="center"
                classes={cardClasses}
                onClick={handleClickOpenCamera}
              >
                <CardHeader sx={{ color: "#4DDA90" }} title="Cameras" />
                <CardContent>
                  <VideoSettingsTwoToneIcon sx={{ fontSize: "80px" }} />
                </CardContent>
              </Card>
            </Grid>
          </>
        )}

        <Dialog open={openCamera} onClose={handleCloseCamera}>
          <DialogContent sx={{ background: "#E3E3E3" }}>
            {/* <Avatar style={avaterStyle}>
            <SettingsIcon />
          </Avatar> */}
            <h3 style={{ color: "#3F424C" }}>Cameras Settings</h3>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="standard-basic"
                    name="camera1Name"
                    label="Camera 1 - Name"
                    variant="standard"
                    value={cameraName1}
                    onChange={() => {
                      setCameraName1(event.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="standard-basic"
                    label="Camera 1 - Link"
                    variant="standard"
                    value={cameraUrl1}
                    onChange={() => {
                      setCameraUrl1(event.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="standard-basic"
                    label="Camera 2 - Name"
                    variant="standard"
                    value={cameraName2}
                    onChange={() => {
                      setCameraName2(event.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="standard-basic"
                    label="Camera 2 - Link"
                    variant="standard"
                    value={cameraUrl2}
                    onChange={() => {
                      setCameraUrl2(event.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="standard-basic"
                    label="Camera 3 - Name"
                    variant="standard"
                    value={cameraName3}
                    onChange={() => {
                      setCameraName3(event.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="standard-basic"
                    label="Camera 3 - Link"
                    variant="standard"
                    value={cameraUrl3}
                    onChange={() => {
                      setCameraUrl3(event.target.value);
                    }}
                  />
                </Grid>
              </Grid>
            </form>
          </DialogContent>
          <DialogActions sx={{ background: "#E3E3E3" }}>
            <Button
              style={{ margin: "15px", color: "#3F414D" }}
              onClick={handleCloseCamera}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              style={btnStyle}
              color="secondary"
              onClick={handleSubmitCamera}
            >
              SUBMIT
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </>
  );
});
