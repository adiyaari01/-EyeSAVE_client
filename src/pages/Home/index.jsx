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
import {useNavigate} from 'react-router-dom'

export default memo(() => {
  const cardClasses = CardUseStyles()
  const navigate = useNavigate(); 
  return (
    <>
      <Grid container spacing={2} justifyContent="center" mb={2} >
        <Grid item xs={10} sm={4} md={4}>
          <Card align="center" classes={cardClasses} onClick={() => navigate("/watchLive")}>
            <CardHeader title="Watch LIVE" />
            <CardContent>
              <PlayIcon sx={{ fontSize: "100px" }} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={10} sm={4} md={4}>
          <Card align="center" classes={cardClasses} onClick={() => navigate("/recirdings")}>
            <CardHeader title="See recordings"/>
            <CardContent>
              <PauseIcon sx={{ fontSize: "100px" }} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent="center" mt={2}>
      <Grid item xs={10} sm={2.5} md={2.5}>
          <Card align="center" classes={cardClasses} onClick={() => navigate("/Forms")}>
            <CardHeader title="Forms"/>
            <CardContent>
              <FormsIcon sx={{ fontSize: "100px" }} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={10} sm={2.5} md={2.5}>
          <Card align="center" classes={cardClasses} onClick={() => navigate("/Messages")}>
            <CardHeader title="Messages" />
            <CardContent>
              <MessageIcon sx={{ fontSize: "100px"}} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={10} sm={2.5} md={2.5}>
          <Card align="center" classes={cardClasses} onClick={() => navigate("/staff")}>
            <CardHeader title="Staff info"/>
            <CardContent>
              <StaffIcon sx={{ fontSize: "100px" }} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={10} sm={2.5} md={2.5}>
          <Card align="center" classes={cardClasses} onClick={() => navigate("/children")}>
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
