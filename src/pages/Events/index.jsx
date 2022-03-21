import { Container, Stack } from "@mui/material";
import { useRecoilValue } from "recoil";
import { childrenInfoState, eventsState } from "../../state/atoms";

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
  const events = useRecoilValue(eventsState);
  const allChildren = useRecoilValue(childrenInfoState);
  
  const todayEvents = events.filter(
    (event) => event._date === getCurrentDate()
  );

  const positiveInteractions = events.filter(
    (event) => event._eventType === 'Positive'
  );

  const positiveToday = todayEvents.filter(
    (todayEvents) => todayEvents._eventType === 'Positive'
  );

  const negativeInteractions = events.filter(
    (event) => event._eventType === 'Negative'
  );
  const negativeToday = events.filter(
    (negativeToday) => negativeToday._eventType === 'Negative'
  );

  console.log(events);
  console.log(allChildren);
  console.log("positive: ", positiveInteractions);
  console.log("positive roday: ", positiveInteractions);
  console.log("negative: ", negativeInteractions);
  console.log("negative today: ", negativeInteractions);

  // const chldrenWithReports = allChildren.map((child) => {
  //   const attendance = todayReports.find((r) => r._childId === child._id);
  //   return { ...child, report: attendance };
  // });

  // const arrived = chldrenWithReports.filter(
  //   (child) => child.report?._arrivalTime
  // );

  // const lates = chldrenWithReports.filter(
  //   (child) => child.report?._childDelay === true && !child.report?._arrivalTime
  // );

  // const absance = allChildren.filter((child) =>
  //   childrenAttendance.find((attendance) => {
  //     const currentChild = attendance._childId === child._id;
  //     const today = attendance._date === getCurrentDate();
  //     const absance = attendance._absence && !attendance._arrivalTime;
  //     return currentChild && today && absance;
  //   })
  // );

  // const unknow = allChildren.filter((child) => {
  //   const todayAttendace = childrenAttendance.filter((attendance) => {
  //     const today = attendance._date === getCurrentDate();
  //     return today;
  //   });
  //   return !todayAttendace.find(
  //     (attendance) => attendance._childId == child._id
  //   );
  // });

  // console.log("arrivedItems", arrived);
  // console.log("lates", lates);
  // console.log("unknow", unknow);
  // console.log("absance", absance);

  return (
    <Container>
      {/* <Stack
        justifyContent={"center"}
        direction={"row"}
        flexWrap="wrap"
        gap={3}
      >
        <List items={arrived} />
        <List items={lates} />
        <List items={unknow} />
        <List items={absance} />
      </Stack> */}
      Events Page
    </Container>
  );
  //   return <div> <Container>{JSON.stringify(childrenAttendance)}
  //       {JSON.stringify(staffAttendance)}
  //       </Container></div>
};
