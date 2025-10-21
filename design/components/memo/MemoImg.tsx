import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import { CardMedia } from "@mui/material";

const heights = [180, 88, 88];

const Item = styled(Paper)(({ theme }) => ({
   backgroundColor: "#fff",
   ...theme.typography.body2,
   padding: theme.spacing(0.5),
   textAlign: "center",
   color: (theme.vars || theme).palette.text.secondary,
   ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
   }),
   backgroundImage:
      "url(https://i.pinimg.com/736x/45/2f/e8/452fe838686998ed6790674dfa08551a.jpg)",
   backgroundPosition: "center",
   backgroundSize: "cover",
}));

const img = [
   "https://i.pinimg.com/736x/45/2f/e8/452fe838686998ed6790674dfa08551a.jpg",
   "https://i.pinimg.com/736x/3b/fa/f1/3bfaf12eccab6176fabb3efd8ef6fce9.jpg",
];

export default function BasicMasonry() {
   return (
      <Box sx={{ width: 450 }}>
         <Masonry columns={2} spacing={0.5}>
            {heights.map((height, index) => {
               // index ဟာ img array ရဲ့ အရှည် (2) ထက် နည်းရင်သာ ပုံကို ထည့်ပါ
               const imageUrl = index < img.length ? img[index] : undefined;

               return (
                  <CardMedia
                     key={index} // image={imageUrl} သည် ၃ ခုမြောက်အတွက် undefined ဖြစ်သွားမယ်
                     image={imageUrl} // background color ကို အချည်းနှီး နေရာမှာ မြင်ရမှာပါ
                     sx={{
                        height: height,
                        backgroundColor: "#e0e0e0", // ရှင်းလင်းစွာ မြင်ရစေရန်
                        borderRadius: 1,
                     }}
                     title="Masonry Item"
                  />
               );
            })}
         </Masonry>
      </Box>
   );
}
