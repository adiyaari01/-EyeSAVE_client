import { Container } from "@mui/material";
import { useRecoilValue } from "recoil";
import { childrenAttendanceState } from "../../state/atoms";
import { staffAttendanceState } from "../../state/atoms";

export default () => {
  /* TODO: react-query vs axios */
  // if axios we should use effect of react
  const childrenAttendance = useRecoilValue(childrenAttendanceState);
  const staffAttendance = useRecoilValue(staffAttendanceState);
  console.log(childrenAttendance);
  console.log(staffAttendance);
  return <Container>Staff Attendance</Container>
//   return <div> <Container>{JSON.stringify(childrenAttendance)}
//       {JSON.stringify(staffAttendance)}
//       </Container></div>
};


