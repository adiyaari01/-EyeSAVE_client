import { Container, Paper } from "@mui/material";
import FormSteps from "../../components/forms/FormSteps";
import { AppProvider } from "../../context";

export default () => (
  <AppProvider>
    <Container component="main" maxWidth="sm" sx={{ mb: 4, /*color:'#F0F2F5'*/}}>
      <Paper 
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 },  /*background:'#3F414D', color:'#F0F2F5'*/}}
      >
        <div><h2>Child Registration Form</h2></div>
        <FormSteps />
      </Paper>
    </Container>
  </AppProvider>
);
