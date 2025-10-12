import { Box, Fab, ThemeProvider } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import LeftDrawer from "../../components/todolist/LeftDrawer";
import { createTheme } from "@mui/material/styles";
import TodolistTable from "../../components/todolist/TodolistTable";
import EnhancedTable from "../../components/todolist/muiTable";

export default function Todolist() {
   const theme = createTheme({
      palette: {
         primary: {
            main: "#0d47a1",
         },
      },
   });
   return (
      <Box sx={{ display: "flex" }}>
         <LeftDrawer />
         <TodolistTable />
         {/* <EnhancedTable /> */}
         <ThemeProvider theme={theme}>
            <Fab
               color="primary"
               aria-label="add"
               sx={{ position: "fixed", bottom: 30, right: 30 }}
            >
               <AddIcon />
            </Fab>
         </ThemeProvider>
      </Box>
   );
}
