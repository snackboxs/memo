import { Menu, MenuItem, Divider, ListItemIcon, Avatar } from "@mui/material";
import {
   PersonAdd,
   Settings,
   Logout,
   LightMode,
   DarkMode,
} from "@mui/icons-material";
import { useAppContext } from "../src/AppProvider";
import { setMode } from "../src/features/counter/counterSlice";
import { type RootState } from "../src/store";

interface AccountMenuProps {
   accountAnchorEl: null | HTMLElement;
   handleCloseAccountMenu: () => void;
}
import { useSelector, useDispatch } from "react-redux";

export default function AccountMenu({
   accountAnchorEl,
   handleCloseAccountMenu,
}: AccountMenuProps) {
   // const { mode, setMode } = useAppContext();
   // if (!mode) {
   //    return null;
   // }

   const dispatch = useDispatch();
   const currentMode = useSelector((state: RootState) => state.theme.themeMode);

   const handleToggleMode = () => {
      dispatch(setMode());
   };
   return (
      <Menu
         anchorEl={accountAnchorEl}
         id="account-menu"
         open={Boolean(accountAnchorEl)}
         onClose={handleCloseAccountMenu}
         onClick={handleCloseAccountMenu}
         slotProps={{
            paper: {
               elevation: 0,
               sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                     width: 32,
                     height: 32,
                     ml: -0.5,
                     mr: 1,
                  },
                  "&::before": {
                     content: '""',
                     display: "block",
                     position: "absolute",
                     top: 0,
                     right: 14,
                     width: 10,
                     height: 10,
                     bgcolor: "background.paper",
                     transform: "translateY(-50%) rotate(45deg)",
                     zIndex: 0,
                  },
               },
            },
         }}
         transformOrigin={{ horizontal: "right", vertical: "top" }}
         anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
         <MenuItem onClick={handleCloseAccountMenu}>
            <Avatar /> Profile
         </MenuItem>
         <Divider />
         <MenuItem onClick={handleCloseAccountMenu}>
            <ListItemIcon>
               <PersonAdd fontSize="small" />
            </ListItemIcon>
            Add another account
         </MenuItem>
         <MenuItem onClick={handleToggleMode}>
            <ListItemIcon>
               {currentMode === "light" ? <DarkMode /> : <LightMode />}
            </ListItemIcon>
            {currentMode === "light" ? "Dark Mode" : "Light Mode"}
         </MenuItem>

         {/* useContext */}
         {/* <MenuItem
            onClick={() =>
               mode === "light" ? setMode("dark") : setMode("light")
            }
         >
            <ListItemIcon>
               {mode === "light" ? <DarkMode /> : <LightMode />}
            </ListItemIcon>
            {mode === "light" ? "Dark Mode" : "Light Mode"}
         </MenuItem> */}
         <MenuItem onClick={handleCloseAccountMenu}>
            <ListItemIcon>
               <Settings fontSize="small" />
            </ListItemIcon>
            Settings
         </MenuItem>
         <MenuItem onClick={handleCloseAccountMenu}>
            <ListItemIcon>
               <Logout fontSize="small" />
            </ListItemIcon>
            Logout
         </MenuItem>
      </Menu>
   );
}
