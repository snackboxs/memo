import {
   Drawer,
   Toolbar,
   ListItem,
   List,
   ListItemIcon,
   ListItemText,
   ListItemButton,
   Divider,
   Box,
} from "@mui/material";

import { Add as AddIcon } from "@mui/icons-material";
import MemoDialogBox from "./MemoDialogBox";
import { useMemoContext } from "../../pages/memo/MemoProvider";

export default function LeftDrawer() {
   const {
      openAddMemoBox,
      setOpenAddMemoBox,
      memoList,
      currentMemo,
      setCurrentMemo,
   } = useMemoContext();

   return (
      <Box>
         <Drawer
            variant="permanent"
            sx={{
               width: 240,
               flexShrink: 0,
               [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box" },
            }}
         >
            <Toolbar />
            <Box sx={{ overflow: "auto" }}>
               <List>
                  <ListItem>
                     <ListItemButton onClick={() => setOpenAddMemoBox(true)}>
                        <ListItemIcon>
                           <AddIcon />
                        </ListItemIcon>
                        <ListItemText primary="Add new" />
                     </ListItemButton>
                  </ListItem>
               </List>
               <Divider />
               <List>
                  {memoList &&
                     memoList.map((text) => (
                        <ListItem key={text} disablePadding>
                           <ListItemButton
                              onClick={() =>
                                 setCurrentMemo(text.toLocaleLowerCase())
                              }
                              selected={text.toLowerCase() === currentMemo}
                           >
                              <ListItemText
                                 primary={text}
                                 sx={{ textAlign: "center" }}
                              />
                           </ListItemButton>
                        </ListItem>
                     ))}
               </List>
            </Box>
         </Drawer>
         <MemoDialogBox />
      </Box>
   );
}
