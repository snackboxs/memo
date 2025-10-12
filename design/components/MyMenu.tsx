import { Menu, MenuItem } from "@mui/material";

interface MenuProps {
   menuAnchorEl: null | HTMLElement;
   handelCloseMenu: () => void;
}
export default function AccountMenu({
   menuAnchorEl,
   handelCloseMenu,
}: MenuProps) {
   return (
      <Menu
         anchorEl={menuAnchorEl}
         id="account-menu"
         open={Boolean(menuAnchorEl)}
         onClose={handelCloseMenu}
         onClick={handelCloseMenu}
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
                     left: 14,
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
         <MenuItem onClick={handelCloseMenu}>
            Cash Notes
         </MenuItem>
         <MenuItem onClick={handelCloseMenu}>
            Todolist
         </MenuItem>
         <MenuItem onClick={handelCloseMenu}>
            Diary 
         </MenuItem>
      </Menu>
   );
}
