import { Container, Stack } from "@mui/material";
import { useRecoilValue } from "recoil";
import { staffInfoState } from "../../state/atoms";
import { List } from "./List";

export default () => {
  /* TODO: react-query vs axios */
  // if axios we should use effect of react
  const staff = useRecoilValue(staffInfoState);
  console.log("staff", staff);
  return (
    <Container>
      <Stack
        justifyContent={"center"}
        direction={"row"}
        flexWrap="wrap"
        gap={3}
      ></Stack>
      <List items={staff} />
    </Container>
  );
//   return <div> <Container>{JSON.stringify(childrenAttendance)}
//       {JSON.stringify(staffAttendance)}
//       </Container></div>
};


