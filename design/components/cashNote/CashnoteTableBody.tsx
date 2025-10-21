import { TableBody, TableRow, TableCell, Checkbox } from "@mui/material";
import type { CashData } from "../../pages/cashnote/CashnoteDataType.types";

interface CashnoteTableBodyProps {
   rows: CashData[]; // CashData တွေရဲ့ array (စာရင်း)
   selected: readonly number[]; // ရွေးချယ်ထားတဲ့ row တွေရဲ့ ID များ
   handleClick: (id: number) => void; // row ကို နှိပ်ရင် ဘာလုပ်မယ်ဆိုတဲ့ function
}

export default function CashnoteTableBody({
   rows,
   selected,
   handleClick,
}: CashnoteTableBodyProps) {

   return (
      <TableBody>
         {rows.map((row, index) => {
            const isItemSelected = selected.includes(row.id);
            const labelId = `enhanced-table-checkbox-${index}`;
            return (
               <TableRow
                  hover
                  onClick={() => handleClick(row.id)}
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row.id}
                  selected={isItemSelected}
                  sx={{ cursor: "pointer" }}
               >
                  <TableCell padding="checkbox">
                     <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                           "aria-labelledby": labelId,
                        }}
                        onClick={() => alert("hello")}
                     />
                  </TableCell>
                  <TableCell>{row.note}</TableCell>
                  <TableCell
                     sx={{
                        color: row.type === "CASH_OUT" ? "tomato" : "green",
                        fontWeight: "medium",
                     }}
                  >
                     {row.amount}
                  </TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>{row.date}</TableCell>
               </TableRow>
            );
         })}
      </TableBody>
   );
}
