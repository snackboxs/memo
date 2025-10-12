import {
   Table,
   TableContainer,
   TableHead,
   TableBody,
   TableCell,
   TableRow,
   Toolbar,
   Paper,
   Box,
   IconButton,
   Divider,
} from "@mui/material";
import {
   Delete as DeleteIcon,
   CheckBox,
   CheckBoxOutlineBlank,
} from "@mui/icons-material";
import { useState } from "react";

interface Data {
   id: number;
   note: string;
   date: string;
   done: boolean;
}

function createData(
   id: number,
   note: string,
   date: string,
   done: boolean
): Data {
   return {
      id,
      note,
      date,
      done,
   };
}
const rows = [
   createData(1, "note1", "12-8-100", false),
   createData(2, "note2", "12-8-100", false),
   createData(3, "note3", "12-8-100", true),
   createData(4, "note4", "12-8-100", false),
];

export default function TodolistTable() {
   const [finished, setFinished] = useState(rows);

   const toggle = (id: number) => {
      console.log(id);
      setFinished((rows) =>
         rows.map((row) => (row.id === id ? { ...row, done: !row.done } : row))
      );
      console.log;
   };
   return (
      <Box sx={{ width: "100%" }}>
         <Toolbar />
         <Paper>
            <TableContainer>
               <Table stickyHeader aria-label="customized table" size="medium">
                  <TableHead>
                     <TableRow>
                        <TableCell padding="checkbox">
                           <IconButton>
                              <CheckBoxOutlineBlank />
                           </IconButton>
                        </TableCell>
                        <TableCell sx={{ textAlign: "center" }}>
                           Notes
                        </TableCell>
                        <TableCell sx={{ textAlign: "center" }}>Time</TableCell>
                        <TableCell padding="checkbox">
                           <IconButton>
                              <DeleteIcon />
                           </IconButton>
                        </TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {finished
                        .filter((row) => !row.done)
                        .map((row) => {
                           return (
                              <TableRow
                                 key={row.id}
                                 hover
                                 onClick={() => toggle(row.id)}
                                 sx={{ cursor: "pointer" }}
                              >
                                 <TableCell padding="checkbox">
                                    <IconButton
                                       onClick={(e) => {
                                          e.stopPropagation(); // prevent row click
                                          toggle(row.id);
                                       }}
                                    >
                                       <CheckBoxOutlineBlank />
                                    </IconButton>
                                 </TableCell>
                                 <TableCell>{row.note}</TableCell>
                                 <TableCell sx={{ textAlign: "center" }}>
                                    {row.date}
                                 </TableCell>
                                 <TableCell padding="checkbox">
                                    <IconButton>
                                       <DeleteIcon />
                                    </IconButton>
                                 </TableCell>
                              </TableRow>
                           );
                        })}
                  </TableBody>
               </Table>
            </TableContainer>
         </Paper>
         <Table sx={{ marginTop: 10 }}>
            <TableBody>
               {finished
                  .filter((row) => row.done)
                  .map((row) => {
                     return (
                        <TableRow
                           key={row.id}
                           hover
                           sx={{
                              backgroundColor: "inherit",
                              cursor: "pointer"
                           }}
                           onClick={() => toggle(row.id)}
                        >
                           <TableCell padding="checkbox">
                              <IconButton
                                 onClick={(e) => {
                                    e.stopPropagation(); // prevent row click
                                    toggle(row.id);
                                 }}
                              >
                                 <CheckBox />
                              </IconButton>
                           </TableCell>
                           <TableCell>{row.note}</TableCell>
                           <TableCell sx={{ textAlign: "center" }}>
                              {row.date}
                           </TableCell>
                           <TableCell padding="checkbox">
                              <IconButton>
                                 <DeleteIcon />
                              </IconButton>
                           </TableCell>
                        </TableRow>
                     );
                  })}
            </TableBody>
         </Table>
      </Box>
   );
}
