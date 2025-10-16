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
import DialogBox from "./CashnoteDialogBox";
import { useCashContext } from "../../pages/cashnote/CashnoteProvider";

export default function LeftDrawer() {
   const {
      openCashnoteDialogBox,
      setOpenCashnoteDialogBox,
      cashnote,
      setCurrentCashNote,
      currentCashNote,
   } = useCashContext();

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
                     <ListItemButton
                        onClick={() => setOpenCashnoteDialogBox(true)}
                     >
                        <ListItemIcon>
                           <AddIcon />
                        </ListItemIcon>
                        <ListItemText primary="Add new" />
                     </ListItemButton>
                  </ListItem>
               </List>
               <Divider />
               <List>
                  {cashnote &&
                     cashnote.map((text) => (
                        <ListItem key={text} disablePadding>
                           <ListItemButton
                              onClick={() =>
                                 setCurrentCashNote(text.toLocaleLowerCase())
                              }
                              selected={text.toLowerCase() === currentCashNote}
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
         <DialogBox />
      </Box>
   );
}
