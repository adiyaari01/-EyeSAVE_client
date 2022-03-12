import { Container } from "@mui/material";
import { useRecoilValue } from "recoil";
import { staffAttendanceState } from "../../state/atoms";
import { staffInfoState } from "../../state/atoms";

export default () => {
  /* TODO: react-query vs axios */
  // if axios we should use effect of react
  const staffAttendance = useRecoilValue(staffAttendanceState);
  const staffInfo = useRecoilValue(staffInfoState);
  console.log(staffAttendance);
  console.log(staffInfo);
  return <Container>Staff Info</Container>
//   return <div> <Container>{JSON.stringify(staffAttendance)}
//       {JSON.stringify(staffAttendance)}
//       </Container></div>
};


