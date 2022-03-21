import { memo } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import PauseIcon from "@mui/icons-material/PauseCircleOutlineOutlined";
import PlayIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import MessageIcon from "@mui/icons-material/MailOutline";
import StaffIcon from "@mui/icons-material/PeopleOutlineOutlined";
import ChildrenIcon from "@mui/icons-material/ChildCareOutlined";
import FormsIcon from '@mui/icons-material/DescriptionOutlined';
import Grid from "@mui/material/Grid";
import { CardUseStyles } from "./GridUseStyles";





export default memo(() => {
  const cardClasses = CardUseStyles()
  return (
    <>
      <Grid container spacing={2} justifyContent="center" mb={2} >
        <Grid item xs={10} sm={4} md={4}>
          <Card align="center" classes={cardClasses} >
            <CardHeader title="Watch LIVE" />
            <CardContent>
              <PlayIcon sx={{ fontSize: "100px" }} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={10} sm={4} md={4}>
          <Card align="center" classes={cardClasses}>
            <CardHeader title="See recordings"/>
            <CardContent>
              <PauseIcon sx={{ fontSize: "100px" }} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent="center" mt={2}>
      <Grid item xs={10} sm={2.5} md={2.5}>
          <Card align="center" classes={cardClasses}>
            <CardHeader title="Forms"/>
            <CardContent>
              <FormsIcon sx={{ fontSize: "100px" }} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={10} sm={2.5} md={2.5}>
          <Card align="center" classes={cardClasses}>
            <CardHeader title="Messages" />
            <CardContent>
              <MessageIcon sx={{ fontSize: "100px"}} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={10} sm={2.5} md={2.5}>
          <Card align="center" classes={cardClasses}>
            <CardHeader title="Staff info"/>
            <CardContent>
              <StaffIcon sx={{ fontSize: "100px" }} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={10} sm={2.5} md={2.5}>
          <Card align="center" classes={cardClasses}>
            <CardHeader title="Children info"/>
            <CardContent>
              <ChildrenIcon sx={{ fontSize: "100px" }} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
});
