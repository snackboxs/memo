import {
   AppBar,
   Toolbar, IconButton,
   Container,
   Box,
   Button
} from "@mui/material";
import {
   AccountCircle,
   Menu as MenuIcon
} from "@mui/icons-material";

import { useState, type MouseEvent } from "react";
import Logo from "../components/Logo";
import AccountMenu from "../components/AccountMenu";
import MyMenu from "../components/MyMenu";


export default function MyAppBar() {
   const [menuAnchorlEl, setMenuAnchorElNav] = useState<null | HTMLElement>(
      null
   );
   const [accountAnchorEl, setAccountAnchorEl] = useState<null | HTMLElement>(
      null
   );
  
   const handleOpenMenu = (event: MouseEvent<HTMLElement>) => {
      setMenuAnchorElNav(event.currentTarget);
   };
   const handleCloseMenu = () => {
      setMenuAnchorElNav(null);
   };

   // Account Menu
   const handleOpenAccountMenu = (event: MouseEvent<HTMLElement>) => {
      setAccountAnchorEl(event.currentTarget);
   };
   const handleCloseAccountMenu = () => {
      setAccountAnchorEl(null);
   };

   return (
         <AppBar
            sx={{
               // backgroundColor: "rgba(0,0,0)",
               boxShadow: "none",
               zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
         >
            <Container maxWidth="xl">
               <Toolbar disableGutters>
                  <Logo none="none" flex="flex" flexgrow={0} />
                  <Box sx={{ display: { xs: "flex", md: "none" } }}>
                     <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenMenu}
                        color="inherit"
                     >
                        <MenuIcon />
                     </IconButton>
                     <MyMenu
                        menuAnchorEl={menuAnchorlEl}
                        handelCloseMenu={handleCloseMenu}
                     />
                  </Box>
                  <Logo none="flex" flex="none" flexgrow={1} />
                  <Box sx={{ flexGrow: 1 }}></Box>
                  <Box sx={{ display: { xs: "none", md: "flex" }, mr: 3 }}>
                     <Button
                        sx={{
                           color: "white",
                           display: "block",
                           textTransform: "none",
                        }}
                     >
                        Cash Notes
                     </Button>
                     <Button
                        sx={{
                           color: "white",
                           display: "block",
                           textTransform: "none",
                        }}
                     >
                        TodoList
                     </Button>
                     <Button
                        sx={{
                           color: "white",
                           display: "block",
                           textTransform: "none",
                        }}
                     >
                        Diary
                     </Button>
                  </Box>
                  <IconButton onClick={handleOpenAccountMenu}>
                     <AccountCircle />
                  </IconButton>
                  <AccountMenu
                     accountAnchorEl={accountAnchorEl}
                     handleCloseAccountMenu={handleCloseAccountMenu}
                  />
               </Toolbar>
            </Container>
         </AppBar>
   );
}
