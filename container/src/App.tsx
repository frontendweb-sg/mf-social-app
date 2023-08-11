import AppRoutes from "./router";
import AppThemeProvider from "./providers/theme";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import LinearProgress from "@mui/material/LinearProgress";

const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <Suspense fallback={<LinearProgress />}>
          <AppRoutes />
        </Suspense>
      </BrowserRouter>
    </AppThemeProvider>
  );
};

export default App;
