import {
   Toolbar, Typography,
   Tooltip,
   IconButton,
   alpha
} from "@mui/material";
import {
   Delete as DeleteIcon,
   FilterList as FilterListIcon,
} from "@mui/icons-material";

interface EnhancedTableToolbarProps {
  noteSelected: number;
}

export default function CashnoteToolbar(props: EnhancedTableToolbarProps) {
  const { noteSelected } = props;
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
          backgroundColor: "white",
          width: "calc(100% - 240px)",
          zIndex: 1300,
        },
      ]}
    >
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
