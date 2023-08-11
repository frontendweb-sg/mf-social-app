import AppRoutes from "./router";
import AppThemeProvider from "./providers/theme";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";

const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <Suspense fallback={<h1>Loading....</h1>}>
          <AppRoutes />
        </Suspense>
      </BrowserRouter>
    </AppThemeProvider>
  );
};

export default App;
