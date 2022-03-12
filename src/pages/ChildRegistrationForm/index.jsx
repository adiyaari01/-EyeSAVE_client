import { Container, Paper } from "@mui/material";
import FormSteps from "../../components/forms/FromSteps";
import { AppProvider } from "../../context";

export default () => (
  <AppProvider>
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <FormSteps />
      </Paper>
    </Container>
  </AppProvider>
);
