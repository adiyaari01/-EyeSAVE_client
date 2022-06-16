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
  const recordingList = allRecordings.data.map((item, index) => {
    const recording = {
      url: baseSelectVideo + item.Key,
      date: item.Key.substring(0,item.Key.length-6),
    }
    return recording;
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
        {recordingList.map((record, index) => (
          <div>
          <Typography sx={{ fontSize:"15px", color: "#A2A4A7", m:'10px'}} align={!matches?"center":"left"}>{record.date}</Typography>
          <video width={!matches?"310":"410"} height={!matches?"200":"230"} controls controlsList="nodownload">
            <source src={record.url} type="video/mp4"></source>
          </video>
          </div>
        ))}
      </Stack>
    </Container>
  );
};
