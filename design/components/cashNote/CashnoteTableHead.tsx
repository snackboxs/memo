import { TableHead, Checkbox, TableRow, TableCell } from "@mui/material";

interface EnhancedTableProps {
  numSelected: number;
  // onRequestSort: (
  //    event: React.MouseEvent<unknown>,
  //    property: keyof Data
  // ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // order: Order;
  // orderBy: string;
  rowCount: number;
}

export default function CashnoteTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, numSelected, rowCount } = props;
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        <TableCell>Note</TableCell>
        <TableCell>Amount</TableCell>
        <TableCell>Category</TableCell>
        <TableCell>Date</TableCell>
      </TableRow>
    </TableHead>
  );
}
