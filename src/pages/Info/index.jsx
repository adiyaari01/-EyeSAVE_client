import { memo } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import StaffIcon from "@mui/icons-material/PeopleOutlineOutlined";
import ChildrenIcon from "@mui/icons-material/ChildCareOutlined";
import Grid from "@mui/material/Grid";
import { CardUseStyles } from "./GridUseStyles";
import { useNavigate } from "react-router-dom";

export default memo(() => {
  const cardClasses = CardUseStyles();
  const navigate = useNavigate();
  return (
    <>
      <Grid container spacing={4} justifyContent="center" mb={2}>
        <Grid item xs={10} sm={4} md={4}>
          <Card
            align="center"
            classes={cardClasses}
            onClick={() => navigate("/staff")}
          >
            <CardHeader sx={{ color: "#FDCA51" }} title="Staff Info" />
            <CardContent>
              <StaffIcon sx={{ fontSize: "100px" }} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={10} sm={4} md={4}>
          <Card
            align="center"
            classes={cardClasses}
            onClick={() => navigate("/Children")}
          >
            <CardHeader sx={{ color: "#F868A3" }} title="Children Info" />
            <CardContent>
              <ChildrenIcon sx={{ fontSize: "100px" }} />
            </CardContent>
          </Card>
        </Grid>{" "}
        <Grid item xs={10} sm={4} md={4}>
          <Card
            align="center"
            classes={cardClasses}
            onClick={() => navigate("/parents")}
          >
            <CardHeader sx={{ color: "#c483d9" }} title="Escorts Info" />
            <CardContent>
              <StaffIcon sx={{ fontSize: "100px" }} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
});
