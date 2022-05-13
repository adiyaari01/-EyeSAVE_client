import { Stack, Container, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

// TODO: generic

export default () => {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <Container>
      <Typography
        align={!matches ? "center" : "left"}
        sx={{ fontSize: "25px", color: "#A2A4A7" }}
      >
        WatchLive
      </Typography>
      <Stack direction={"row"} flexWrap="wrap" gap={3} justifyContent="center">
        {/* <video ref={videoRef}></video> */}
        <iframe
          width={!matches ? "300" : "440"}
          height={!matches ? "200" : "270"}
          src="https://rtsp.me/embed/NHANEa74/"
          frameBorder="0"
        ></iframe>
        <iframe
          width={!matches ? "300" : "440"}
          height={!matches ? "200" : "270"}
          src="https://rtsp.me/embed/NHANEa74/"
          frameBorder="0"
        ></iframe>
        <iframe
          width={!matches ? "300" : "440"}
          height={!matches ? "200" : "270"}
          src="https://rtsp.me/embed/NHANEa74/"
          frameBorder="0"
        ></iframe>
        <iframe
          width={!matches ? "300" : "440"}
          height={!matches ? "200" : "270"}
          src="https://rtsp.me/embed/NHANEa74/"
          frameBorder="0"
        ></iframe>
        {/* <iframe width="420" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
        <iframe width="400" height="240" src="https://www.youtube.com/embed/6JK1Pp0j0nQ" frameBorder="0" allowFullScreen></iframe>
        <img crossorigin="anonymous" name="main" id="main" border="0" width="640" height="480" src="https://rtsp.me/embed/RhHSG8bA/"/>
        <img crossorigin="anonymous" name="main" id="main" border="0" width="640" height="480" src="rtsp://tapocamnum2:Ss321352387@176.229.235.86:554/stream1"/> */}
      </Stack>
    </Container>
  );
};
