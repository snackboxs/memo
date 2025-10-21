import { Box } from "@mui/material";
import CashnoteTable from "../../components/cashNote/CashnoteTable";
import CashnoteLeftDrawer from "../../components/cashNote/CashnoteLeftDrawer";
import CashnoteProvider from "./CashnoteProvider";
import CashnoteAddDataBox from "../../components/cashNote/CashnoteAddDataBox";
import FabIcon from "../../components/cashNote/FabIcon";

export default function Cashnote() {
      
   return (
      <CashnoteProvider>
         <Box sx={{ display: "flex" }}>
            <CashnoteLeftDrawer />
            <CashnoteTable />
            <CashnoteAddDataBox />
            <FabIcon />
         </Box>
      </CashnoteProvider>
   );
}
