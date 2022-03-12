import { memo } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import PauseIcon from "@mui/icons-material/PauseCircleOutlineOutlined";
import PlayIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import MessageIcon from "@mui/icons-material/MailOutline";
import StaffIcon from "@mui/icons-material/PeopleOutlineOutlined";
import ChildrenIcon from "@mui/icons-material/ChildCareOutlined";
import Grid from "@mui/material/Grid";
import { CardUseStyles } from "./GridUseStyles";
import "./styles.css";

export default memo(() => {
  const cardClasses = CardUseStyles()
  // const bigCardStyle = {
  //   height: "50%",
  //   maxWidth: 345,
  //   padding: "65px 25px",
  //   textAlign: "center",
  //   backgroundColor: "#3F424C",
  //   margin: "35px 0px",
  //   borderRadius: 16,
  //   color: "white",
  //   boxShadow:
  //     "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  // };
  // const smallCardStyle = {
  //   padding: "35px 10px",
  //   margin: "35px 0px",
  //   textAlign: "center",
  //   backgroundColor: "#3F424C",
  //   borderRadius: 16,
  //   color: "white",
  //   boxShadow:
  //     "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  // };
  return (
    <>
      <Grid container spacing={2} justifyContent="center" mb={2}>
        <Grid item xs={10} sm={4} md={4}>
          <Card align="center" classes={cardClasses}>
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
            <CardHeader title="Messages" />
            <CardContent>
              <MessageIcon sx={{ fontSize: "100px" }} />
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
