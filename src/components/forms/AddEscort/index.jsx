import * as React from "react";
import { Grid, Container, Paper } from "@mui/material";
import { TextField, Button } from "@mui/material";
import { updateChild, postEscort } from "../../../api";
import { useEffect } from "react";
import {useLocation} from "react-router-dom";
import { getFormById } from "../../../api";
import "../../../styles/index.css"

export default () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [image, setImage] = React.useState("");
  const [escortId, setEscortId] = React.useState(0);
  const [childId, setChildId] = React.useState(0);
  const [relation, setRelation] = React.useState(0);
  const [isLoading, toggleIsLoading] = React.useState(true);
  const [requestError, setRequestError] = React.useState("");
  const location = useLocation();

  useEffect(() => {
    const formId = location.pathname.split("/").at(-1); 
    const fetchData = () => {
      getFormById(formId).then((res) => {
      }).catch((err) => {
        setRequestError(`Error to find form, ${err?.message || ""}`);
      }).finally(() => {
        toggleIsLoading(false);  
      })
    }
    fetchData();
  },[]);

  const fileToBase64 = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        resolve(reader.result);
      };
    });
  };

  const handleSubmit = async () => {
    const base64 = await fileToBase64(image);

    const child = {
      _escort: [parseInt(escortId)],
    };
    const escort = {
      _firstName: firstName,
      _lastName: lastName,
      _id: parseInt(escortId),
      _phone: phone,
      _children: [parseInt(childId)],
      _relation: relation,
      _imageUrl: base64,
    };
    await updateChild(child, childId);
    await postEscort(escort);
    alert("Form successfully submitted");
  };

  const btnStyle = {
    margin: "8px 0",
  };

  if (isLoading) {
    return <div className="load"></div>;
  }

  if (requestError) {
    return <div>{requestError}</div>;
  }
  return (
    <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
      <Paper
        variant="outlined"
        sx={{
          my: { xs: 3, md: 6 },
          p: { xs: 2, md: 3 },
          background: "#E3E3E3 !important",
        }}
      >
        <div>
          <h2 style={{ color: "#3F424C" }}>Escort Form</h2>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={() => {
                setFirstName(event.target.value);
              }}
              fullWidth
              id="standard-basic"
              label="First Name"
              name="firstName"
              variant="standard"
              placeholder="Enter first name"
              type={"text"}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={() => {
                setLastName(event.target.value);
              }}
              fullWidth
              id="standard-basic"
              name="LastName"
              label="Last Name"
              variant="standard"
              placeholder="Enter last name"
              type={"text"}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={() => {
                setEscortId(event.target.value);
              }}
              fullWidth
              id="standard-basic"
              name="escortId"
              label="Escort Id"
              variant="standard"
              placeholder="Enter escort id"
              type={"number"}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={() => {
                setPhone(event.target.value);
              }}
              fullWidth
              id="standard-basic"
              name="phone"
              label="Phone Number"
              variant="standard"
              placeholder="Enter phone number"
              type={"text"}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={() => {
                setRelation(event.target.value);
              }}
              fullWidth
              id="standard-basic"
              name="relation"
              label="Relation"
              variant="standard"
              placeholder="Enter relation"
              type={"text"}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={() => {
                setChildId(event.target.value);
              }}
              fullWidth
              id="standard-basic"
              name="childId"
              label="Child Id"
              variant="standard"
              placeholder="Enter child Id"
              type={"number"}
            />
          </Grid>
          <Grid item xs={12}>
            <input
              type="file"
              onChange={() => {
                setImage(event.target.files[0]);
              }}
            />
          </Grid>

          <Grid item xs={12} align="center">
            <Button
              variant="contained"
              style={btnStyle}
              color="secondary"
              onClick={handleSubmit}
            >
              SUBMIT
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};
