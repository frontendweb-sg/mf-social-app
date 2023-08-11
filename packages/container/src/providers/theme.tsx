import type { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../context/theme";
import CssBaseline from "@mui/material/CssBaseline";

const AppThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
