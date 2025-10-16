import { Box, Toolbar } from "@mui/material";
import MyAppBar from "../components/MyAppBar";
import { Outlet } from "react-router";

export default function Home() {
   return (
      <Box >
         <MyAppBar />
         <Toolbar />
         <Outlet />
      </Box>
   );
}
