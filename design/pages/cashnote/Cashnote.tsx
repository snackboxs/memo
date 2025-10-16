import { Box, Fab } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import CashnoteTable from "../../components/cashNote/CashnoteTable";
import CashnoteLeftDrawer from "../../components/cashNote/CashnoteLeftDrawer";
import CashnoteProvider from "./CashnoteProvider";
import CashnoteAddDataBox from "../../components/cashNote/CashnoteAddDataBox";
import { useCashContext } from "./CashnoteProvider";

export default function Cashnote() {
   const { openCashnoteAddDataBox, setOpenCashnoteAddDataBox } =
      useCashContext();
      console.log(openCashnoteAddDataBox);
      
   return (
      <CashnoteProvider>
         <Box sx={{ display: "flex" }}>
            <CashnoteLeftDrawer />
            <CashnoteTable />
            <CashnoteAddDataBox />
            <Fab
               aria-label="add"
               sx={{ position: "fixed", bottom: 70, right: 30 }}
               onClick={() =>
                  setOpenCashnoteAddDataBox(true)
               }
            >
               <AddIcon />
            </Fab>
         </Box>
      </CashnoteProvider>
   );
}
