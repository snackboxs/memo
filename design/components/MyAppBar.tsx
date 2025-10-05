import {
   AppBar,
   Toolbar,
   Typography,
   useScrollTrigger,
   Slide,
   IconButton,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
interface Props {
   window?: () => Window;
   children?: React.ReactElement<unknown>;
}

function HideOnScroll(props: Props) {
   const { children, window } = props;
   const trigger = useScrollTrigger({
      target: window ? window() : undefined,
   });

   return (
      <Slide appear={false} direction="down" in={!trigger}>
         {children ?? <div />}
      </Slide>
   );
}
export default function MyAppBar(props: Props) {
   return (
      <HideOnScroll {...props}>
         <AppBar
            sx={{
               backgroundColor: "rgba(0,0,0,.9)",
               backdropFilter: "blur(5px)",
               boxShadow: "none",
            }}
         >
            <Toolbar>
               <Typography>MEMO</Typography>
               <Typography sx={{ flexGrow: 1 }}></Typography>
               <IconButton>
                  <AccountCircle />
               </IconButton>
            </Toolbar>
         </AppBar>
      </HideOnScroll>
   );
}
