import { Container, Typography } from "@mui/material";
import { useRecoilValue } from "recoil";
import { childrenInfoState, eventsState } from "../../state/atoms";
import { useEffect, useState } from "react";
import EnhancedTable from "./Table";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const getCurrentDate = () => {
  let date_ob = new Date();
  // adjust 0 before single digit date
  let day = ("0" + date_ob.getDate()).slice(-2);
  // current month
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  // current year
  let year = date_ob.getFullYear();
  // prints date in YYYY-MM-DD format
  return year + "-" + month + "-" + day;
};

export default () => {
  const eventsReports = useRecoilValue(eventsState);
  const allChildren = useRecoilValue(childrenInfoState);
  const [events, setEvents] = useState(eventsReports);
  const [todayEvents, setTodayEvents] = useState([]);
  const [positiveEvents, setPositive] = useState([]);
  const [positiveToday, setPositiveToday] = useState([]);
  const [negativeEvents, setNegative] = useState([]);
  const [negativeToday, setNegativeToday] = useState([]);
  const [selectValue, setSelectValue] = useState("all");
  const [identifyStranger, setIdentifyStranger] = useState([]);
  const [identifyStrangerToday, setIdentifyStrangerToday] = useState([]);
  const [identifyChildAlone, setIdentifyChildAlone] = useState([]);
  const [identifyChildAloneToday, setIdentifyChildAloneToday] = useState([]);
  const [identifyChildLeftAlone, setIdentifyChildLeftAlone] = useState([]);
  const [identifyChildLeftAloneToday, setIdentifyChildLeftAloneToday] = useState([]);

  useEffect(() => {
    const todayEventsLocal = eventsReports.filter(
      (event) => event._date === getCurrentDate()
    );
    setTodayEvents(todayEventsLocal);

    const identifyStranger = eventsReports.filter(
      (event) => event._eventType === "Stranger"
    );
    setIdentifyStranger(identifyStranger);

    const identifyStrangerToday = todayEvents.filter(
      (todayEvents) => todayEvents._eventType === "Stranger"
    );
    setIdentifyStrangerToday(identifyStrangerToday);

    const identifyChildAlone = eventsReports.filter(
      (event) => event._eventType === "Child Alone"
    );
    setIdentifyChildAlone(identifyChildAlone);

    const identifyChildAloneToday = eventsReports.filter(
      (event) => event._eventType === "Child Alone"
    );
    setIdentifyChildAloneToday(identifyChildAloneToday);

    const identifyChildLeftAlone = eventsReports.filter(
      (event) => event._eventType === "Child Left Alone"
    );
    setIdentifyChildLeftAlone(identifyChildLeftAlone);

    const identifyChildLeftAloneToday = eventsReports.filter(
      (event) => event._eventType === "Child Left Alone"
    );
    setIdentifyChildLeftAloneToday(identifyChildLeftAloneToday);

    const positiveInteractions = eventsReports.filter(
      (event) => event._eventType === "Positive"
    );
    setPositive(positiveInteractions);

    const positiveToday = todayEvents.filter(
      (todayEvents) => todayEvents._eventType === "Positive"
    );
    setPositiveToday(positiveToday);

    const negativeInteractions = eventsReports.filter(
      (event) => event._eventType === "Negative"
    );
    setNegative(negativeInteractions);

    const negativeTodayLocal = todayEvents.filter(
      (negativeToday) => negativeToday._eventType === "Negative"
    );
    setNegativeToday(negativeTodayLocal);
  }, [events]);

  const handleChange = (event) => {
    handleFilter(event.target.value);
  };

  const handleFilter = (value) => {
    setSelectValue(value);
    switch (value) {
      case "all":
        setEvents(eventsReports);
        break;
      case "today":
        setEvents(todayEvents);
        break;
      case "positive":
        setEvents(positiveEvents);
        break;
      case "positiveToday":
        setEvents(positiveToday);
        break;
      case "negative":
        setEvents(negativeEvents);
        break;
      case "negativeToday":
        setEvents(negativeToday);
        break;
      case "stranger":
        setEvents(identifyStranger);
        break;
      case "strangerToday":
        setEvents(identifyStrangerToday);
        break;
      case "childAlone":
        setEvents(identifyChildAlone);
        break;
      case "childAloneToday":
        setEvents(identifyChildAloneToday);
        break;
      case "childLeftAlone":
        setEvents(identifyChildLeftAlone);
        break;
      case "childLeftAloneToday":
        setEvents(identifyChildAloneToday);
        break;
      default:
        break;
    }
  };
  if (!events) {
    return <div>Loding..</div>;
  }
  return (
    <Container>
      <Typography sx={{ fontSize: "25px", color: "#A2A4A7" }}>
        Events
      </Typography>
      <Box sx={{ minWidth: 120, textAlign: "right" }}>
        <FormControl>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectValue}
            onChange={handleChange}
            sx={{
              color: "#3F414D",
              backgroundColor: "#E2E3E4",
              width: "100%",
              minWidth: "150px",
              height: "30px",
            }}
          >
            <MenuItem value={"all"}>All</MenuItem>
            <MenuItem value={"today"}>Today</MenuItem>
            <MenuItem value={"negative"}>Negative</MenuItem>
            <MenuItem value={"negativeToday"}>Negative Today</MenuItem>
            <MenuItem value={"positive"}>Positive</MenuItem>
            <MenuItem value={"positiveToday"}>Positive Today</MenuItem>
            <MenuItem value={"stranger"}>Stranger</MenuItem>
            <MenuItem value={"strangerToday"}>Stranger Today</MenuItem>
            <MenuItem value={"childeAlone"}>childeAlone</MenuItem>
            <MenuItem value={"childeAloneToday"}>childe Alone Today</MenuItem>
            <MenuItem value={"childeLeftAlone"}>childeLeftAlone</MenuItem>
            <MenuItem value={"childeLeftAloneToday"}>childe Left Alone Today</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <EnhancedTable events={events} children={allChildren} />
    </Container>
  );
};
