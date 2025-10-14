import { Box, Fab, ThemeProvider } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import LeftDrawer from "../../components/todolist/LeftDrawer";
import { createTheme } from "@mui/material/styles";
import TodolistTable from "../../components/todolist/TodolistTable";
import AddNewTodolistData from "../../components/todolist/AddNewTodolistData";
import { useAppContext } from "../../src/AppProvider";

export default function Todolist() {
   const { openAddNewTodolistDataBox, setOpenAddNewTodolistDataBox } =
      useAppContext();
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
         <AddNewTodolistData />
         <ThemeProvider theme={theme}>
            <Fab
               color="primary"
               aria-label="add"
               sx={{ position: "fixed", bottom: 30, right: 30 }}
               onClick={() =>
                  setOpenAddNewTodolistDataBox(!openAddNewTodolistDataBox)
               }
            >
               <AddIcon />
            </Fab>
         </ThemeProvider>
      </Box>
   );
}
