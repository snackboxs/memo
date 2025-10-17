import { Box } from "@mui/material";
import MemoCard from "./MemoCard";

export default function MemoData() {
   return (
      <Box
         sx={{
            display: "flex",
            padding: 1,
            // justifyContent: "space-evenly",
            flexWrap: "wrap",
         }}
      >
         <MemoCard />
         <MemoCard />
         <MemoCard />
         <MemoCard />
         <MemoCard />
         <MemoCard />
         <MemoCard />
         <MemoCard />
      </Box>
   );
}
