import { Fab } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import { useCashContext } from "../../pages/cashnote/CashnoteProvider";

export default function FabIcon() {
   const { setOpenCashnoteAddDataBox } = useCashContext();
   
   return (
      <Fab
         aria-label="add"
         sx={{ position: "fixed", bottom: 70, right: 30 }}
         onClick={() => setOpenCashnoteAddDataBox(true)}
      >
         <AddIcon />
      </Fab>
   );
}
