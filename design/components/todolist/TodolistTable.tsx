import {
   Table,
   TableContainer,
   TableHead,
   TableBody,
   TableCell,
   TableRow,
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
import { useAppContext } from "../../src/AppProvider";
import { useTodolistContext } from "../../pages/todolist/TodolistProvider";

export default function TodolistTable() {
   // const [finished, setFinished] = useState(rows);
   const { currentNote } = useAppContext();
   const { rows, setRows, toggleTodo } = useTodolistContext();

   const remove = (id: number) => {
      setRows(() => rows.filter((row) => row.id !== id));
   };
   const toggleAll = () => {
      setRows(
         rows.map((row) =>
            row.done === false ? { ...row, done: !row.done } : row
         )
      );
   };
   const removeAll = () => {
      setRows(rows.filter((row) => row.done === false));
   };

   return (
      <Box sx={{ width: "100%" }}>
         <Paper>
            <TableContainer>
               <Table stickyHeader aria-label="customized table" size="medium">
                  <TableHead>
                     <TableRow>
                        <TableCell padding="checkbox">
                           <IconButton onClick={() => toggleAll()}>
                              <CheckBoxOutlineBlank sx={{color: "green"}}/>
                           </IconButton>
                        </TableCell>
                        <TableCell sx={{ textAlign: "center" }}>
                           Todolist
                        </TableCell>
                        <TableCell sx={{ textAlign: "center" }}>Time</TableCell>
                        <TableCell padding="checkbox">
                           <IconButton onClick={() => removeAll()}>
                              <DeleteIcon color="error"/>
                           </IconButton>
                        </TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {rows
                        .filter((rows) => rows.noteType === currentNote)
                        .filter((row) => !row.done)
                        .map((row) => {
                           return (
                              <TableRow key={row.id} hover>
                                 <TableCell padding="checkbox">
                                    <IconButton
                                       onClick={(e) => {
                                          e.stopPropagation(); // prevent row click
                                          toggleTodo(row.id, row.done);
                                       }}
                                    >
                                       <CheckBoxOutlineBlank sx={{color: "green"}}/>
                                    </IconButton>
                                 </TableCell>
                                 <TableCell>{row.note}</TableCell>
                                 <TableCell sx={{ textAlign: "center" }}>
                                    {row.date}
                                 </TableCell>
                                 <TableCell padding="checkbox">
                                    <IconButton onClick={() => remove(row.id)}>
                                       <DeleteIcon color="error"/>
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
               {rows
                  .filter((rows) => rows.noteType === currentNote)
                  .filter((row) => row.done)
                  .map((row) => {
                     return (
                        <TableRow
                           key={row.id}
                           sx={{
                              backgroundColor: "inherit",
                           }}
                        >
                           <TableCell padding="checkbox">
                              <IconButton
                                 sx={{ color: "gray" }}
                                 onClick={(e) => {
                                    e.stopPropagation(); // prevent row click
                                    toggleTodo(row.id, row.done);
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
