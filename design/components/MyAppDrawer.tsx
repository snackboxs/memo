import {
   Drawer, Box,
   List,
   ListItem,
   ListItemButton,
   ListItemIcon,
   ListItemText, Typography
} from "@mui/material";

import {
   Logout as LogoutIcon,
   Login as LoginIcon
} from "@mui/icons-material";
import { useAppContext } from "../src/AppProvider";
import { useState } from "react";

const drawerWidth = 240;

export default function MyAppDrawer() {
   const { openDrawer, setOpenDrawer } = useAppContext();

   const [items, setItems] = useState([
      "Food", "Health", "Learn"
   ]);

   return (
      <Drawer
         open={openDrawer}
         anchor="right"
         sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
               width: drawerWidth,
               boxSizing: "border-box",
            },
            zIndex: 1300,
         }}
         onClose={() => setOpenDrawer(!openDrawer)}
      >
         <Box sx={{ overflow: "auto" }}>
            <Box sx={{ backgroundColor: "black", height: 200 }}></Box>
            <List>
               <ListItem disablePadding>
                  <ListItemButton>
                     <ListItemText>
                        <Typography sx={{fontSize: 30}}>Alice</Typography>
                     </ListItemText>
                  </ListItemButton>
               </ListItem>
               <ListItem disablePadding>
                  <ListItemButton>
                     <ListItemIcon>
                        <LogoutIcon />
                     </ListItemIcon>
                     <ListItemText primary="Logout" />
                  </ListItemButton>
               </ListItem>
               <ListItem disablePadding>
                  <ListItemButton>
                     <ListItemIcon><LoginIcon /></ListItemIcon>
                     <ListItemText primary="Register" />
                  </ListItemButton>
               </ListItem>
            </List>
         </Box>
      </Drawer>
   );
}
