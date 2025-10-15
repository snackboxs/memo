import { Box, Fab } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import LeftDrawer from "../../components/todolist/LeftDrawer";
import TodolistTable from "../../components/todolist/TodolistTable";
import AddNewTodolistData from "../../components/todolist/AddNewTodolistData";
import { useAppContext } from "../../src/AppProvider";
import TodolistProvider from "./TodolistProvider";

export default function Todolist() {
  const { openAddNewTodolistDataBox, setOpenAddNewTodolistDataBox } =
    useAppContext();

  return (
    <TodolistProvider>
      <Box sx={{ display: "flex" }}>
        <LeftDrawer />
        <TodolistTable />
        <AddNewTodolistData />
          <Fab
            // color="primary"
            aria-label="add"
            sx={{ position: "fixed", bottom: 30, right: 30 }}
            onClick={() =>
              setOpenAddNewTodolistDataBox(!openAddNewTodolistDataBox)
            }
          >
            <AddIcon />
          </Fab>
      </Box>
    </TodolistProvider>
  );
}
