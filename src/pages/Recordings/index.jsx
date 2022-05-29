import * as React from "react";
import { Container, Typography, Stack } from "@mui/material";
import { useRecoilValue } from "recoil";
import { recordingsInfoState } from "../../state/atoms";
import useMediaQuery from '@mui/material/useMediaQuery'

export default () => {
  const matches = useMediaQuery('(min-width:600px)');
  const allRecordings = useRecoilValue(recordingsInfoState);
  const largeRecordings = allRecordings.data.filter((file) => {
    // console.log(file.Size);
    return file.Size > 20000000;
  });
  const smallRecordings = allRecordings.data.filter((file) => {
    return file.Size <= 20000000;
    //if (file.Size <= 20000000){
    // add to list
    // return list;
  });

  const baseSelectVideo = "https://eyesave.s3.eu-central-1.amazonaws.com/";
  // console.log(allRecordings)
  const urlsList = allRecordings.data.map((item) => {
    return baseSelectVideo + item.Key;
  });
  // const downloadList = largeRecordings.data.map((item) => {
  //   return baseSelectVideo + item.Key
  // });
  return (
    <Container>
      <Typography sx={{ fontSize:"25px", color: "#A2A4A7", m:'20px'}} align={"left"}>
        Recordings
      </Typography>
      <Stack direction={"row"} flexWrap="wrap" gap={3} justifyContent="center">
        {urlsList.map((url, index) => (
          <iframe
            key={index}
            width={!matches?"310":"410"}
            height={!matches?"200":"230"}
            src={url}
            frameBorder="0"
          ></iframe>
        ))}
      </Stack>
    </Container>
  );
};
