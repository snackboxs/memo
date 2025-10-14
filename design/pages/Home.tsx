import { Box } from "@mui/material";
import MyAppBar from "../components/MyAppBar";
import MyAppDrawer from "../components/MyAppDrawer";
import Todolist from "./todolist/Todolist"

export default function Home() {
   return (
      <Box>
         <MyAppBar />
         <MyAppDrawer />
         <Todolist />
      </Box>
   );
}
