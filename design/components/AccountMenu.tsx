import { Menu, MenuItem, Divider, ListItemIcon, Avatar } from "@mui/material";
import { PersonAdd, Settings, Logout } from "@mui/icons-material";

interface AccountMenuProps {
   accountAnchorEl: null | HTMLElement;
   handleCloseAccountMenu: () => void;
}
export default function AccountMenu({
   accountAnchorEl,
   handleCloseAccountMenu,
}: AccountMenuProps) {
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
