import MemoData from "../../components/memo/MemoData";
import MemoLeftDrawer from "../../components/memo/MemoLeftDrawer";
import MemoFabIcon from "../../components/memo/MemoFabIcon";

import { Box } from "@mui/material";
import MemoProvider from "./MemoProvider";

export default function Memo() {
   return (
      <MemoProvider>
         <Box sx={{ display: "flex" }}>
            <MemoLeftDrawer />
            <MemoData />
            <MemoFabIcon />
         </Box>
      </MemoProvider>
   );
}
