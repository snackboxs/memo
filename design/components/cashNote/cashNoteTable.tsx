import {
  Table, Toolbar,
  Box,
  Paper,
  TableContainer
} from "@mui/material";

import { useState } from "react";
import { useCashContext } from "../../pages/cashnote/CashnoteProvider";
import CashnoteToolbar from "./CashnoteToolbar";
import CashnoteTableHead from "./CashnoteTableHead";
import CashnoteTableBody from "./CashnoteTableBody";

type Order = "asc" | "desc";

export default function TodolistTable() {
  const [selected, setSelected] = useState<readonly number[]>([]);
  const { rows } = useCashContext();
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

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%" }}>
        <CashnoteToolbar noteSelected={selected.length} />
        <Toolbar />
        <TableContainer>
          <Table size="medium">
            <CashnoteTableHead
              numSelected={selected.length}
              onSelectAllClick={handleSelectAllClick}
              rowCount={rows.length}
            />
            <CashnoteTableBody
              rows={rows}
              selected={selected}
              handleClick={handleClick}
            />
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
