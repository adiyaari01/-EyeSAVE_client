import { Container, Stack } from "@mui/material";
import { useRecoilValue } from "recoil";
import { childrenAttendanceState, childrenInfoState } from "../../state/atoms";
import { staffAttendanceState } from "../../state/atoms";
import { List } from "./List";

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
  /* TODO: react-query vs axios */
  // if axios we should use effect of react
  const childrenAttendance = useRecoilValue(childrenAttendanceState);
  const allChildren = useRecoilValue(childrenInfoState);
  const staffAttendance = useRecoilValue(staffAttendanceState);

  console.log(childrenAttendance);
  console.log(allChildren);
  const arrived = allChildren.filter((child) =>
    childrenAttendance.find((attendance) => {
      const currentChild = attendance._childId === child._id;
      const today = attendance._date === getCurrentDate();
      const isArrived = attendance._arrivalTime;
      return currentChild && today && isArrived;
    })
  );

  const lates = allChildren.filter((child) =>
    childrenAttendance.find((attendance) => {
      const currentChild = attendance._childId === child._id;
      const today = attendance._date === getCurrentDate();
      const late = attendance._childDelay === true && !attendance._arrivalTime;
      return currentChild && today && late;
    })
  );

  const absance = allChildren.filter((child) =>
    childrenAttendance.find((attendance) => {
      const currentChild = attendance._childId === child._id;
      const today = attendance._date === getCurrentDate();
      const absance = attendance._absence && !attendance._arrivalTime;
      return currentChild && today && absance;
    })
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

  console.log("arrived", arrived);
  console.log("lates", lates);
  console.log("unknow", unknow);
  console.log("absance", absance);

  return (
    <Container>
      <Stack
        justifyContent={"center"}
        direction={"row"}
        flexWrap="wrap"
        gap={3}
      ></Stack>
      <List items={arrived} />
      <hr />
      <List items={lates} />

      <hr />
      <List items={unknow} />

      <hr />
      <List items={absance} />
    </Container>
  );
  //   return <div> <Container>{JSON.stringify(childrenAttendance)}
  //       {JSON.stringify(staffAttendance)}
  //       </Container></div>
};
