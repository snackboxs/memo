import { Box, Fab } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import CashnoteTable from "../../components/cashNote/CashnoteTable";
import CashnoteLeftDrawer from "../../components/cashNote/CashnoteLeftDrawer";
import CashnoteProvider from "./CashnoteProvider";

export default function Cashnote() {
  return (
    <CashnoteProvider>
      <Box sx={{ display: "flex" }}>
        <CashnoteLeftDrawer />
        <CashnoteTable />
        <Fab
          aria-label="add"
          sx={{ position: "fixed", bottom: 30, right: 30 }}
          //   onClick={() =>
          //     setOpenAddNewTodolistDataBox(!openAddNewTodolistDataBox)
          //   }
        >
          <AddIcon />
        </Fab>
      </Box>
    </CashnoteProvider>
  );
}
