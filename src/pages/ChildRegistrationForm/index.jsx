import * as React from "react";
import { Container, Paper } from "@mui/material";
import FormSteps from "../../components/forms/FormSteps";
import { AppProvider } from "../../context";
import { useEffect, } from "react";
import {useLocation} from "react-router-dom";
import { getFormById } from "../../api"
import "../../styles/index.css"

export default () => {
  const [isLoading, toggleIsLoading] = React.useState(true);
  const [requestError, setRequestError] = React.useState("");
  const location = useLocation();

  useEffect(() => {
    const formId = location.pathname.split("/").at(-1); 
    console.log('formId', formId); // TODO: remove log
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

  if (isLoading) {
    return <div className="loader"></div>;
  }

  if (requestError) {
    return <div>{requestError}</div>;
  }

  return (
  <AppProvider>
    <Container component="main" maxWidth="lg" sx={{ mb: 4, /*color:'#3F424C'*/}}>
      <Paper 
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }, background:'#E3E3E3 !important'/*background:'#3F414D', color:'#F0F2F5'*/}}
      >
        <div><h2 style={{ color: '#3F424C' }}>Child Registration Form</h2></div>
        <FormSteps />
      </Paper>
    </Container>
  </AppProvider>
)};
