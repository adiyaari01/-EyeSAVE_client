import { Container, Stack } from "@mui/material";
import { useRecoilValue } from "recoil";
import { childrenInfoState } from "../../state/atoms";
import { List } from "./List";

export default () => {
  /* TODO: react-query vs axios */
  // if axios we should use effect of react
  const allChildren = useRecoilValue(childrenInfoState);
  console.log(allChildren);
  return (
    <Container>
      <Stack
        justifyContent={"center"}
        direction={"row"}
        flexWrap="wrap"
        gap={3}
      ></Stack>
      <List items={allChildren} />
    </Container>
  );
//   return <div> <Container>{JSON.stringify(childrenAttendance)}
//       {JSON.stringify(staffAttendance)}
//       </Container></div>
};


