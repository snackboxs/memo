import {
   Table,
   TableBody,
   TableHead,
   TableCell,
   TableRow,
   IconButton,
   Toolbar,
   Box,
   Paper,
   TableContainer,
   alpha,
   Typography,
   Tooltip,
   Checkbox,
} from "@mui/material";

import {
   Delete as DeleteIcon,
   CheckBox,
   FilterList as FilterListIcon,
   Fullscreen,
   AccountCircle,
} from "@mui/icons-material";
import { useState } from "react";

type Order = "asc" | "desc";

interface EnhancedTableToolbarProps {
   noteSelected: number;
   numSelected: number;
   onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
   rowCount: number;
}

function TodolistToolbar(props: EnhancedTableToolbarProps) {
   const { noteSelected, onSelectAllClick, numSelected, rowCount } = props;
   return (
      <Toolbar
         sx={[
            {
               pl: { sm: 2 },
               pr: { xs: 1, sm: 1 },
            },
            noteSelected > 0 && {
               bgcolor: (theme) =>
                  alpha(
                     theme.palette.primary.main,
                     theme.palette.action.activatedOpacity
                  ),
            },
            {
               position: "fixed",
               backgroundColor: "#212121",
               width: "calc(100% - 240px)",
               zIndex: 1300,
            },
         ]}
      >
         <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
               "aria-label": "select all desserts",
            }}
         />
         {noteSelected > 0 ? (
            <Typography
               sx={{ flex: "1 1 100%" }}
               color="inherit"
               variant="subtitle1"
               component="div"
            >
               {noteSelected} selected
            </Typography>
         ) : (
            <Typography
               sx={{ flex: "1 1 100%" }}
               variant="h6"
               id="tableTitle"
               component="div"
            >
               Todolist
            </Typography>
         )}
         {noteSelected > 0 ? (
            <Tooltip title="Delete">
               <IconButton>
                  <DeleteIcon />
               </IconButton>
            </Tooltip>
         ) : (
            <Tooltip title="Filter list">
               <IconButton>
                  <FilterListIcon />
               </IconButton>
            </Tooltip>
         )}
      </Toolbar>
   );
}

interface Data {
   id: number;
   note: string;
   done: boolean;
}

function createData(id: number, note: string): Data {
   return {
      id,
      note,
      done: false
   };
}

const rows = [
   createData(
      1,
      "This example demonstrates the use of Checkbox and clickable rows for selection, with a custom Toolbar. It uses the TableSortLabel component to help style column headingsThe Table has been given a fixed width to demonstrate horizontal scrolling. In order to prevent the pagination controls from scrolling, the TablePagination component is used outside of the Table.",
   ),
   createData(
      2,
      "From individual pixels to fully decoded images on your screen, raw pixel data gets transformed, compressed, and efficiently delivered. Learn about the technique"
   ),
   createData(
      3,
      "From individual pixels to fully decoded images on your screen, raw pixel data gets transformed, compressed, and efficiently delivered. Learn about the technique"
   ),
   createData(
      4,
      "This example demonstrates the use of Checkbox and clickable rows for selection, with a custom Toolbar. It uses the TableSortLabel component to help style column headingsThe Table has been given a fixed width to demonstrate horizontal scrolling. In order to prevent the pagination controls from scrolling, the TablePagination component is used outside of the Table."
   ),
   createData(
      5,
      "From individual pixels to fully decoded images on your screen, raw pixel data gets transformed, compressed, and efficiently delivered. Learn about the technique"
   ),
   createData(
      6,
      "From individual pixels to fully decoded images on your screen, raw pixel data gets transformed, compressed, and efficiently delivered. Learn about the technique"
   ),
   createData(
      7,
      "This example demonstrates the use of Checkbox and clickable rows for selection, with a custom Toolbar. It uses the TableSortLabel component to help style column headingsThe Table has been given a fixed width to demonstrate horizontal scrolling. In order to prevent the pagination controls from scrolling, the TablePagination component is used outside of the Table."
   ),
   createData(
      8,
      "From individual pixels to fully decoded images on your screen, raw pixel data gets transformed, compressed, and efficiently delivered. Learn about the technique"
   ),
   createData(
      9,
      "From individual pixels to fully decoded images on your screen, raw pixel data gets transformed, compressed, and efficiently delivered. Learn about the technique"
   ),
   createData(
      10,
      "This example demonstrates the use of Checkbox and clickable rows for selection, with a custom Toolbar. It uses the TableSortLabel component to help style column headingsThe Table has been given a fixed width to demonstrate horizontal scrolling. In order to prevent the pagination controls from scrolling, the TablePagination component is used outside of the Table."
   ),
   createData(
      11,
      "From individual pixels to fully decoded images on your screen, raw pixel data gets transformed, compressed, and efficiently delivered. Learn about the technique"
   ),
   createData(
      12,
      "From individual pixels to fully decoded images on your screen, raw pixel data gets transformed, compressed, and efficiently delivered. Learn about the technique"
   ),
   createData(
      13,
      "This example demonstrates the use of Checkbox and clickable rows for selection, with a custom Toolbar. It uses the TableSortLabel component to help style column headingsThe Table has been given a fixed width to demonstrate horizontal scrolling. In order to prevent the pagination controls from scrolling, the TablePagination component is used outside of the Table."
   ),
   createData(
      14,
      "From individual pixels to fully decoded images on your screen, raw pixel data gets transformed, compressed, and efficiently delivered. Learn about the technique"
   ),
   createData(
      15,
      "From individual pixels to fully decoded images on your screen, raw pixel data gets transformed, compressed, and efficiently delivered. Learn about the technique"
   ),
];
export default function TodolistTable() {
   const [selected, setSelected] = useState<readonly number[]>([]);

   const handleClick = (id: number) => {
      const selectedIndex = selected.indexOf(id);
      let newSelected: readonly number[] = [];

      if (selectedIndex === -1) {
         newSelected = newSelected.concat(selected, id);
      } else if (selectedIndex === 0) {
         newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
         newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
         newSelected = newSelected.concat(
            selected.slice(0, selectedIndex),
            selected.slice(selectedIndex + 1)
         );
      }
      setSelected(newSelected);
   };

   const handleSelectAllClick = (
      event: React.ChangeEvent<HTMLInputElement>
   ) => {
      if (event.target.checked) {
         const newSelected = rows.map((n) => n.id);
         setSelected(newSelected);
         return;
      }
      setSelected([]);
   };

   return (
      <Box sx={{ width: "100%" }}>
         <Toolbar />
         <Paper sx={{ width: "100%", mb: 2}}>
            <TodolistToolbar
               noteSelected={selected.length}
               numSelected={selected.length}
               onSelectAllClick={handleSelectAllClick}
               rowCount={rows.length}
            />
            <TableContainer>
               <Table
                  sx={{ minWidth: 750, maxWidth: "100%", marginTop: 8 }}
                  aria-labelledby="tableTitle"
                  size="medium"
               >
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
                              <TableCell>
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
                              <TableCell>10:20</TableCell>
                              <TableCell>12.7.2018</TableCell>
                           </TableRow>
                        );
                     })}
                  </TableBody>
               </Table>
            </TableContainer>
         </Paper>
      </Box>
   );
}
