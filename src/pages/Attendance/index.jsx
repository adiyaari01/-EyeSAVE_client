import { Container, Stack, Typography } from "@mui/material";
import { useRecoilValue } from "recoil";
import { childrenAttendanceState, childrenInfoState } from "../../state/atoms";
import { staffAttendanceState } from "../../state/atoms";
import { List } from "./List";
import useMediaQuery from '@mui/material/useMediaQuery'

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
  const matches = useMediaQuery('(min-width:600px)');
  const childrenAttendance = useRecoilValue(childrenAttendanceState);
  const allChildren = useRecoilValue(childrenInfoState);
  const staffAttendance = useRecoilValue(staffAttendanceState);

  const todayReports = childrenAttendance.filter(
    (report) => report._date === getCurrentDate()
  );
 
  const chldrenWithReports = allChildren.map((child) => {
    const attendance = todayReports.find((r) => r._childId === child._id);
    return { ...child, report: attendance };
  });

  const arrived = chldrenWithReports.filter(
    (child) => child.report?._arrivalTime
  );

  const lates = chldrenWithReports.filter(
    (child) => child.report?._childDelay === true && !child.report?._arrivalTime
  );

  const absence = chldrenWithReports.filter(
    (child) => child.report?._absence === true && !child.report?._arrivalTime
  );

  const unknow = allChildren.filter((child) => {
    const todayAttendace = childrenAttendance.filter((attendance) => {
      const today = attendance._date === getCurrentDate();
      return today;
    });
    return !todayAttendace.find(
      (attendance) => attendance._childId == child._id
    );
  });

  console.log("absence", absence);

  const items =  [...unknow, ...absence, ...lates, ...arrived]

  return (
    <Container>
      <Typography align={!matches?"center":"left"} sx={{ fontSize: "25px", color: "#A2A4A7", m:"20px" }}>
        Attendance
      </Typography>
      <Stack
        direction={"row"}
        flexWrap="wrap"
        gap={3}
      >
        <List items={items}/>

      </Stack>
    </Container>
  );
  //   return <div> <Container>{JSON.stringify(childrenAttendance)}
  //       {JSON.stringify(staffAttendance)}
  //       </Container></div>
};
