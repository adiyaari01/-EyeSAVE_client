import React, {useRef, useEffect, useState} from "react";
import { Container } from "@mui/material";

export default () => {
  const videoRef = useRef(null)
  const getVideo = () => {
    navigator.mediaDevices.
    getUserMedia({
      video: {
        width: 500, 
        height: 300}
      })
      .then(stream => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch(err => {
        console.error(err);
      })
  }

  useEffect(() =>{
    getVideo();
  }, [videoRef]);

  return (
    <Container>
        <video ref={videoRef}></video>
    </Container>
  );
};
