import { Typography } from "@mui/material";
interface LogoProps {
   none: "none" | "flex" | "block"; 
   flex: "none" | "flex" | "block";
   flexgrow: number;
}
export default function Logo({ none, flex, flexgrow }: LogoProps) {
   return (
      <Typography
         variant="h6"
         noWrap
         component="a"
         href="#app-bar-with-responsive-menu"
         sx={{
            mr: 2,
            display: { xs: none, md: flex },
            letterSpacing: ".1rem",
            flexGrow: flexgrow,
            color: "inherit",
            textDecoration: "none",
         }}
      >
         MEMO
      </Typography>
   );
}
