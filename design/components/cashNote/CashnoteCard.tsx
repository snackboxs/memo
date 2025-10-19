import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useCashContext } from "../../pages/cashnote/CashnoteProvider";

const cards = [
   {
      id: "CASH_IN",
      title: "Income",
      description: "10000",
   },
   {
      id: "CASH_OUT",
      title: "Cash Out",
      description: "5000",
   },
   {
      id: "TOTAL",
      title: "Balance",
      description: "5000",
   },
];

function CashnoteCard() {
   const [selectedCard, setSelectedCard] = React.useState(0);
   const { setCashType } = useCashContext();
   return (
      <Box
         sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 2,
         }}
      >
         {cards.map((card, index) => (
            <Card key={card.id}>
               <CardActionArea
                  onClick={() => {
                     setCashType(card.id);
                     setSelectedCard(index);
                  }}
                  data-active={selectedCard === index ? "" : undefined}
                  sx={{
                     height: "100%",
                     "&[data-active]": {
                        backgroundColor: "action.selected",
                        "&:hover": {
                           backgroundColor: "action.selectedHover",
                        },
                     },
                  }}
               >
                  <CardContent
                     sx={{
                        height: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                     }}
                  >
                     <Typography
                        variant="h5"
                        component="div"
                        sx={{
                           color:
                              card.id === "CASH_IN"
                                 ? "green"
                                 : card.id === "CASH_OUT"
                                 ? "tomato"
                                 : "dodgerblue",
                                 fontSize: 18
                        }}
                     >
                        {card.title}
                     </Typography>
                     <Typography variant="body2" color="text.secondary" sx={{fontWeight: "bold", fontSize: 15}}>
                        {card.description}
                     </Typography>
                  </CardContent>
               </CardActionArea>
            </Card>
         ))}
      </Box>
   );
}

export default CashnoteCard;
