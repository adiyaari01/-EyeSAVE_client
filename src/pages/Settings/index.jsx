import React, { useState } from "react";
import DateMomentUtils from "@date-io/moment";
import { TimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import {
  Grid,
  TextField,
  Button,
} from "@mui/material";
import {updateSettings} from "../../api"

const btnStyle = {
  margin: "8px 0",
};

const Settings = () => {
  const [startMorning, setStartMorning] = useState(new Date());
  const [endMorning, setEndMorning] = useState(new Date());
  const [startNoon, setStartNoon] = useState(new Date());
  const [endNoon, setEndNoon] = useState(new Date());

  // TODO: get request

  const handleSubmit = async () => {
    const settings = {
      _id: "6267f40027a29b9d4294a708",
      _startMorning: `${startMorning.getHours}:${startMorning.getMinutes}`,
      _endMorning: `${endMorning.getHours}:${endMorning.getMinutes}`,
      _startNoon: `${startNoon.getHours}:${startNoon.getMinutes}`,
      _endNoon: `${endNoon.getHours}:${endNoon.getMinutes}`,
    };
    console.log(settings._startMorning);
    const res = await updateSettings(settings);
  };

  return (
    <Grid container spacing={2} sx={{background: "#E3E3E3"}}>
      <Grid item xs={12} sm={6}>
        <div>
          <h1 style={{ color: "#3F424C" }}>Settings</h1>
        </div>
        <form>
          <MuiPickersUtilsProvider utils={DateMomentUtils}>
            <div>
              <h2 style={{ color: "#3F424C" }}>Morning Attendance</h2>
              <h3 style={{ color: "#3F424C" }}>Start Time</h3>
              <TimePicker value={startMorning} onChange={setStartMorning} />
              <h3 style={{ color: "#3F424C" }}>End Time</h3>
              <TimePicker value={endMorning} onChange={setEndMorning} />
            </div>
            <div>
              <h2 style={{ color: "#3F424C" }}>Noon Attendance</h2>
              <h3 style={{ color: "#3F424C" }}>Start Time</h3>
              <TimePicker value={startNoon} onChange={setStartNoon} />
              <h3 style={{ color: "#3F424C" }}>End Time</h3>
              <TimePicker value={endNoon} onChange={setEndNoon} />
            </div>
            <div>
              <h2 style={{ color: "#3F424C" }}>Yard Activity</h2>
              <h3 style={{ color: "#3F424C" }}>Start Time</h3>
              <TimePicker value={startNoon} onChange={setStartNoon} />
              <h3 style={{ color: "#3F424C" }}>End Time</h3>
              <TimePicker value={endNoon} onChange={setEndNoon} />
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
      </Grid>
    </Grid>
  );
};
export default Settings;

// import * as React from "react";
// import { useState } from "react";
// import axios from "axios";
// import { useRecoilValue } from "recoil";
// import { escortsInfoState, staffInfoState } from "../../state/atoms";
// import {
//   Grid,
//   Paper,
//   Avatar,
//   TextField,
//   Button,
//   Box,
//   MenuItem,
//   Select,
//   FormControl,
// } from "@mui/material";
// import SettingsIcon from "@mui/icons-material/Settings";

// const Settings = () => {
//   const allEscorts = useRecoilValue(escortsInfoState);
//   const allEmployees = useRecoilValue(staffInfoState);

//   const [form, setForm] = useState({});

//   // filter all parents
//   const handleSubmit = async () => {
//     console.log("Submit", form);
//     if (form.userId == "AllParents") {
//       const res = await axios({
//         method: "post",
//         url: "https://eyesave-noitfications.herokuapp.com/escort/sendToMany",
//         data: {
//           msg: form.msg,
//         },
//       });
//       return;
//     }
//     const res = await axios({
//       method: "post",
//       // url: "http://localhost:8001/escort/send",
//       url: "https://eyesave-noitfications.herokuapp.com/escort/send",
//       data: {
//         userId: form.userId,
//         msg: form.msg,
//       },
//     });

//     if (res.data.success) {
//       alert("message send");
//       setForm({});
//     }
//   };

//   console.log(allEscorts);

//   const parents = allEscorts.filter((item) => {
//     return item._relation === "Parent" && item._telegramID;
//   });

//   const staff = allEmployees.filter((employee) => {
//     return employee._telegramID;
//   });
//   console.log(staff);

//   const paperStyle = {
//     padding: 20,
//     width: 480,
//     height: "60vh",
//     margin: "30px auto",
//   };
//   const avaterStyle = {
//     backgroundColor: "#BC88C9",
//   };
//   const btnStyle = {
//     margin: "8px 0",
//   };
//   const fieldStyle = {
//     margin: "8px 0",
//   };

//   return (
//     <div>
//       <Grid align="center">
//         <Paper elevation={10} style={paperStyle}>
//           <Avatar style={avaterStyle}>
//             <SettingsIcon />
//           </Avatar>
//           <h2>Send Message</h2>
//           <Box sx={{ minWidth: 120, textAlign: "left" }}>
//             <FormControl>
//               <Select
//                 labelId="demo-simple-select-label"
//                 id="demo-simple-select"
//                 sx={{
//                   color: "#3F414D",
//                   width: "100%",
//                   minWidth: "150px",
//                   height: "30px",
//                   mt: "20px",
//                 }}
//                 onChange={(e) => {
//                   console.log(e.target.value);
//                   setForm({ ...form, userId: e.target.value });
//                 }}
//               >
//                 <MenuItem value={"AllParents"}>All Parents</MenuItem>
//                 {parents.map((parent, i) => {
//                   return (
//                     <MenuItem value={parent._telegramID} key={i}>
//                       {parent._firstName} {parent._lastName}
//                     </MenuItem>
//                   );
//                 })}
//               </Select>
//             </FormControl>
//           </Box>

//           <TextField
//             style={fieldStyle}
//             label="Text Message"
//             placeholder="Enter your message"
//             fullWidth
//             required
//             multiline
//             value={form.msg || ""}
//             rows={4}
//             onChange={(e) => setForm({ ...form, msg: e.target.value })}
//           ></TextField>
//           <Button
//             variant="contained"
//             style={btnStyle}
//             color="secondary"
//             onClick={handleSubmit}
//           >
//             SEND
//           </Button>
//         </Paper>
//       </Grid>
//     </div>
//   );
// };
// export default Settings;
