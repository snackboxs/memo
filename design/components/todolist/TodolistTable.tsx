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
   Typography,
} from "@mui/material";
import {
   Delete as DeleteIcon,
   CheckBox,
   CheckBoxOutlineBlank,
} from "@mui/icons-material";
import { useState } from "react";
import { useAppContext } from "../../src/AppProvider";

interface Data {
   id: number;
   note: string;
   date: string;
   done: boolean;
   noteType: string;
}

function createData(
   id: number,
   note: string,
   date: string,
   done: boolean,
   noteType: string
): Data {
   return {
      id,
      note,
      date,
      done,
      noteType,
   };
}
const rows = [
   createData(1, "note1", "12-8-100", false, "food"),
   createData(2, "note2", "12-8-100", false, "food"),
   createData(3, "note3", "12-8-100", true, "study"),
   createData(4, "note4", "12-8-100", false, "food"),
   createData(4, "note4", "12-8-100", false, "study"),
];

export default function TodolistTable() {
   const [finished, setFinished] = useState(rows);
   const { currentNote } = useAppContext();

   const remove = (id: number) => {
      setFinished(() => finished.filter((row) => row.id !== id));
   };
   const toggle = (id: number) => {
      setFinished(() =>
         finished.map((row) =>
            row.id === id ? { ...row, done: !row.done } : row
         )
      );
   };
   const toggleAll = () => {
      setFinished(
         finished.map((row) =>
            row.done === false ? { ...row, done: !row.done } : row
         )
      );
   };
   const removeAll = () => {
      setFinished(finished.filter((row) => row.done === false));
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
                           <IconButton onClick={() => toggleAll()}>
                              <CheckBoxOutlineBlank />
                           </IconButton>
                        </TableCell>
                        <TableCell sx={{ textAlign: "center" }}>
                           Notes
                        </TableCell>
                        <TableCell sx={{ textAlign: "center" }}>Time</TableCell>
                        <TableCell padding="checkbox">
                           <IconButton onClick={() => removeAll()}>
                              <DeleteIcon />
                           </IconButton>
                        </TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {finished
                        .filter((rows) => rows.noteType === currentNote)
                        .filter((row) => !row.done)
                        .map((row) => {
                           return (
                              <TableRow key={row.id} hover>
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
                                    <IconButton onClick={() => remove(row.id)}>
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
         <Typography sx={{ marginTop: 10, paddingLeft: 1, color: "gray" }}>
            Done
         </Typography>
         <Divider />
         <Table>
            <TableBody>
               {finished
                  .filter((rows) => rows.noteType === currentNote)
                  .filter((row) => row.done)
                  .map((row) => {
                     return (
                        <TableRow
                           key={row.id}
                           sx={{
                              backgroundColor: "inherit",
                           }}
                           // onClick={() => toggle(row.id)}
                        >
                           <TableCell padding="checkbox">
                              <IconButton
                                 sx={{ color: "gray" }}
                                 onClick={(e) => {
                                    e.stopPropagation(); // prevent row click
                                    toggle(row.id);
                                 }}
                              >
                                 <CheckBox />
                              </IconButton>
                           </TableCell>
                           <TableCell sx={{ color: "gray" }}>
                              {row.note}
                           </TableCell>
                           <TableCell
                              sx={{ textAlign: "center", color: "gray" }}
                           >
                              {row.date}
                           </TableCell>
                           <TableCell padding="checkbox">
                              <IconButton
                                 sx={{ color: "gray" }}
                                 onClick={() => remove(row.id)}
                              >
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
