import { Stack } from "@mui/material";

export default () => {
  return (
    
    <Stack
      direction={"row"}
      flexWrap="wrap"
      gap={3}
      >
        <iframe width="390" height="230" src="https://eyesave.s3.eu-central-1.amazonaws.com/basicvideo.mp4" frameBorder="0"></iframe>     
        <iframe width="390" height="230" src="https://www.youtube.com/embed/tgbNymZ7vqY" frameBorder="0"></iframe>     
    </Stack>
  );
};
