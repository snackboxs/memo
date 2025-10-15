import { Box, Toolbar } from "@mui/material";
import MyAppBar from "../components/MyAppBar";
import { Outlet } from "react-router";
import EnhancedTable from "../components/todolist/muiTable"

export default function Home() {
   return (
      <Box >
         <MyAppBar />
         <Toolbar />
         <EnhancedTable />
         {/* <Outlet /> */}
      </Box>
   );
}
