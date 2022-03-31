import { Container, Typography } from "@mui/material";
import { useRecoilValue } from "recoil";
import { childrenInfoState, eventsState } from "../../state/atoms";
import { useEffect, useState } from "react";
import EnhancedTable from "./Table";

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
  useEffect(() => {
    const todayEventsLocal = eventsReports.filter(
      (event) => event._date === getCurrentDate()
    );
    setTodayEvents(todayEventsLocal);

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
    setNegative(negativeInteractions)
    
    const negativeTodayLocal = todayEvents.filter(
      (negativeToday) => negativeToday._eventType === "Negative"
    );
    setNegativeToday(negativeTodayLocal)


  }, [events]);

  const handleFilter = (value) => {
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
      default:
        break;
    }
  };
  if (!events) {
    return <div>Loding..</div>;
  }
  return (
    <Container>
      <Typography>Events</Typography>
      <button onClick ={()=>{handleFilter("all")}}>All Events</button>
      <button onClick ={()=>{handleFilter("today")}}>Today Events</button>
      <button onClick ={()=>{handleFilter("negative")}}>All Negative</button>
      <button onClick ={()=>{handleFilter("negativeToday")}}>Negative Today</button>
      <button onClick ={()=>{handleFilter("positive")}}>All Positive</button>
      <button onClick ={()=>{handleFilter("positiveToday")}}>Positive Today</button>
      <button>By Child</button>
      <EnhancedTable events={events} children={allChildren} />
    </Container>
  );
};
