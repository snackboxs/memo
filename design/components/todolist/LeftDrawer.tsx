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
import { useAppContext } from "../../src/AppProvider";
import DialogBox from "./DialogBox";
import { useTodolistContext } from "../../pages/todolist/TodolistProvider";

export default function LeftDrawer() {
   const { setOpenDialogBox, setCurrentNote, currentNote } = useAppContext();
   const { noteList } = useTodolistContext();

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
                  {noteList &&
                     noteList.map((text) => (
                        <ListItem key={text} disablePadding>
                           <ListItemButton
                              onClick={() => {
                                 setCurrentNote(text);
                              }}
                              selected={text === currentNote}
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
