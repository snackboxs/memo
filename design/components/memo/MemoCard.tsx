import {
   IconButton,
   Card,
   CardActions,
   CardContent,
   CardMedia,
   Button,
   Typography,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import MemoImg from "./MemoImg"

export default function MediaCard() {
   return (
      <Card sx={{ maxWidth: 345, m: 1}}>
         {/* <CardMedia
            sx={{ height: 140 }}
            image="https://i.pinimg.com/736x/45/2f/e8/452fe838686998ed6790674dfa08551a.jpg"
            title="green iguana"
         /> */}
         <MemoImg />
         <CardContent>
            <Typography gutterBottom variant="h5" component="div">
               Lizard
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
               Lizards are a widespread group of squamate reptiles, with over
               6,000 species, ranging across all continents except Antarctica
            </Typography>
         </CardContent>
         <CardActions sx={{ justifyContent: "space-between" }}>
            <Button size="small">Learn More</Button>
            <IconButton size="small">
               <ShareIcon />
            </IconButton>
         </CardActions>
      </Card>
   ); 
}
