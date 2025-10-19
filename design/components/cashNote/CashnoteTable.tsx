import {
   Table,
   Toolbar,
   Box,
   Paper,
   TableContainer,
   TablePagination,
   FormControlLabel,
   Checkbox,
} from "@mui/material";

import { useState, useMemo } from "react";
import { useCashContext } from "../../pages/cashnote/CashnoteProvider";
import CashnoteToolbar from "./CashnoteToolbar";
import CashnoteTableHead from "./CashnoteTableHead";
import CashnoteTableBody from "./CashnoteTableBody";
import {
   type CashData,
   type Order,
} from "../../pages/cashnote/CashnoteDataType.types";
import CashnoteCard from "./CashnoteCard";

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
   if (b[orderBy] < a[orderBy]) {
      return -1;
   }
   if (b[orderBy] > a[orderBy]) {
      return 1;
   }
   return 0;
}

function getComparator<Key extends keyof any>(
   order: Order,
   orderBy: Key
): (
   a: { [key in Key]: number | string },
   b: { [key in Key]: number | string }
) => number {
   return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
}

export default function CashnoteTable() {
   const [selected, setSelected] = useState<readonly number[]>([]);
   const { rows, currentCashNote, cashType } = useCashContext();
   const [order, setOrder] = useState<Order>("asc");
   const [orderBy, setOrderBy] = useState<keyof CashData>("date");
   const [page, setPage] = useState(0);
   const [dense, setDense] = useState(false); // for pagination
   const [showAllData, setShowAllData] = useState(false); // to show all data
   const [rowsPerPage, setRowsPerPage] = useState(5);

   const rowDatas = useMemo(() => {
      const datas = rows.filter((row) => row.cashnoteType === currentCashNote);

      switch(cashType) {
         case "CASH_IN" :  return datas.filter(data => data.type === "CASH_IN");
         case "CASH_OUT" :  return datas.filter(data => data.type === "CASH_OUT");
         default:
            return datas;
      }
   }, [rows, currentCashNote, cashType]);

   const handleRequestSort = (
      event: React.MouseEvent<unknown>,
      property: keyof CashData
   ) => {
      const isAsc = orderBy === property && order === "asc";
      setOrder(isAsc ? "desc" : "asc");
      setOrderBy(property);
   };

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
         const newSelected = rowDatas.map((n) => n.id);
         setSelected(newSelected);
         return;
      }
      setSelected([]);
   };

   const visibleRows = useMemo(
      () =>
         showAllData
            ? [...rowDatas].sort(getComparator(order, orderBy))
            : [...rowDatas]
                 .sort(getComparator(order, orderBy))
                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
      [order, orderBy, page, rowsPerPage, showAllData, currentCashNote, cashType]
   );

   const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
   };

   const handleChangeRowsPerPage = (
      event: React.ChangeEvent<HTMLInputElement>
   ) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
   };

   const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
      setDense(event.target.checked);
   };
   const handleChangeShowAllData = (
      event: React.ChangeEvent<HTMLInputElement>
   ) => {
      setShowAllData(event.target.checked);
   };

   return (
      <Box sx={{ width: "100%" }}>
         <Paper sx={{ width: "100%" }}>
            <CashnoteToolbar noteSelected={selected.length} />
            <Toolbar />
            <TableContainer>
               <Table
                  sx={{ minWidth: 750 }}
                  aria-labelledby="tableTitle"
                  size={dense ? "small" : "medium"}
               >
                  <CashnoteTableHead
                     numSelected={selected.length}
                     order={order}
                     orderBy={orderBy}
                     onSelectAllClick={handleSelectAllClick}
                     onRequestSort={handleRequestSort}
                     rowCount={rowDatas.length}
                  />
                  <CashnoteTableBody
                     rows={visibleRows}
                     selected={selected}
                     handleClick={handleClick}
                  />
               </Table>
            </TableContainer>
            {!showAllData && (
               <TablePagination
                  rowsPerPageOptions={[5, 10, 20, 30]}
                  component="div"
                  count={rowDatas.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
               />
            )}
         </Paper>
         <FormControlLabel
            control={<Checkbox checked={dense} onChange={handleChangeDense} />}
            sx={{
               marginLeft: 1,
            }}
            label="Dense padding"
         />
         <FormControlLabel
            control={
               <Checkbox
                  checked={showAllData}
                  onChange={handleChangeShowAllData}
               />
            }
            sx={{
               marginLeft: 1,
            }}
            label="Show All"
         />
         <CashnoteCard />
         <Toolbar />
         {/* for scroll button  */}
      </Box>
   );
}
