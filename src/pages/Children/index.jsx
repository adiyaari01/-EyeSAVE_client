import { Container } from "@mui/material";
import { useRecoilValue } from "recoil";
import { childrenAttendanceState } from "../../state/atoms";
import { childrenInfoState } from "../../state/atoms";

export default () => {
  /* TODO: react-query vs axios */
  // if axios we should use effect of react
  const childrenAttendance = useRecoilValue(childrenAttendanceState);
  const childrenInfo = useRecoilValue(childrenInfoState);
  console.log(childrenAttendance);
  console.log(childrenInfo);
  return <Container>Children Info</Container>
//   return <div> <Container>{JSON.stringify(childrenAttendance)}
//       {JSON.stringify(staffAttendance)}
//       </Container></div>
};


