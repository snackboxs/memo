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

import {
   Add as AddIcon,
} from "@mui/icons-material";
import { useAppContext } from "../../src/AppProvider";
import { useState } from "react";
import DialogBox from "./DialogBox";

export default function LeftDrawer() {
   const { setOpenDialogBox, setCurrentNote } = useAppContext();
   const [items, setItems] = useState(["Food", "Health", "Learn"]);

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
                     <ListItemButton onClick={() => setOpenDialogBox(true)}>
                        <ListItemIcon>
                           <AddIcon />
                        </ListItemIcon>
                        <ListItemText primary="Add new" />
                     </ListItemButton>
                  </ListItem>
               </List>
               <Divider />
               <List>
                  {items.map((text) => (
                     <ListItem key={text} disablePadding>
                        <ListItemButton onClick={() => setCurrentNote(text.toLocaleLowerCase())}>
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
