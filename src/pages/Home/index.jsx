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
import { getUserFromSessionStorage } from "../../utils";


export default memo(() => {
  const navigate = useNavigate(); 
  const cardClasses = CardUseStyles()
  const user = getUserFromSessionStorage();

 
// theme.typography.
  return (
    <>
      <Grid container spacing={2} justifyContent="center" mb={2} >
      {user?._position==='Manager' &&
      <>
        <Grid item xs={10} sm={5} md={4}>
          <Card align="center" classes={cardClasses} onClick={() => navigate("/watchLive")}>
            <CardHeader sx={{color: '#5FEBDC'}} title="Watch LIVE" />
            <CardContent>
              <PlayIcon sx={{ fontSize: "100px"}} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={10} sm={5} md={4}>
          <Card align="center" classes={cardClasses} onClick={() => navigate("/recordings")}>
            <CardHeader sx={{color:'#c1e57a'}} title="Recordings"/>
            <CardContent>
              <PauseIcon sx={{ fontSize: "100px"}} />
            </CardContent>
          </Card>
        </Grid>
      </>
      }
      </Grid>
      <Grid container spacing={2} justifyContent="center" mt={2}>
      <Grid item xs={10} sm={5} md={3} lg={2.5}>
        <Card align="center" classes={cardClasses} onClick={() => navigate("/info")}>
            <CardHeader sx={{color:'#FDCA51',flexGrow:1}} title="Info"/>
            <CardContent>
              <StaffIcon sx={{ fontSize: "100px"}} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={10} sm={5} md={3} lg={2.5}>
        <Card align="center" classes={cardClasses} onClick={() => navigate("/attendance")}>
            <CardHeader sx={{color:'#F858A3'}} title="Attendance"/>
            <CardContent>
              <ChildrenIcon sx={{ fontSize: "100px" }} />
            </CardContent>
          </Card>

        </Grid>
        <Grid item xs={10} sm={5} md={3} lg={2.5}>
        <Card align="center" classes={cardClasses} onClick={() => navigate("/events")}>
            <CardHeader sx={{color:'#4DDA90'}} title="Events"/>
            <CardContent>
              <FormsIcon sx={{ fontSize: "100px"}} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={10} sm={5} md={3} lg={2.5}>
        <Card align="center" classes={cardClasses} onClick={() => navigate("/Messages")}>
            <CardHeader sx={{color:'#c483d9'}} title="Messages" />
            <CardContent>
              <MessageIcon sx={{ fontSize: "100px"}} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
});
