import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const theme = createTheme({
   palette: {
      mode: "dark",
   },
});

createRoot(document.getElementById("root")!).render(
   <StrictMode>
      <ThemeProvider theme={theme}>
         <App />
         <CssBaseline />
      </ThemeProvider>
   </StrictMode>
);
