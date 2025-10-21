import {
   Dialog,
   DialogTitle,
   DialogActions,
   DialogContent,
   IconButton,
   Button,
   OutlinedInput,
   TextField,
   styled,
   FormControl,
   InputLabel,
   Box,
   InputAdornment,
   FilledInput,
   FormHelperText,
} from "@mui/material";

import { Close as CloseIcon } from "@mui/icons-material";
import { useCashContext } from "../../pages/cashnote/CashnoteProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
   "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
   },
   "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
   },
}));

export default function CashnoteDialogBox() {
   const { openCashnoteAddDataBox, setOpenCashnoteAddDataBox } =
      useCashContext();

   return (
      <BootstrapDialog
         onClose={() => setOpenCashnoteAddDataBox(false)}
         aria-labelledby="customized-dialog-title"
         open={openCashnoteAddDataBox}
      >
         <DialogTitle
            sx={{ m: 0, p: 2, textAlign: "center" }}
            id="customized-dialog-title"
         >
            Add New Cash Data
         </DialogTitle>
         <IconButton
            aria-label="close"
            onClick={() => setOpenCashnoteAddDataBox(false)}
            sx={(theme) => ({
               position: "absolute",
               right: 8,
               top: 8,
               color: theme.palette.grey[500],
            })}
         >
            <CloseIcon />
         </IconButton>
         <DialogContent dividers>
            <TextField
               id="filled-basic"
               label="Note"
               variant="filled"
               fullWidth
            />
            <FormControl fullWidth sx={{ mt: 1 }} variant="filled">
               <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
               <FilledInput
                  id="filled-adornment-amount"
                  startAdornment={
                     <InputAdornment position="start">$</InputAdornment>
                  }
               />
            </FormControl>
            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: 'top'}}>
               <FormControl sx={{ mt: 1, width: "25ch" }} variant="filled">
                  <FilledInput
                     id="filled-adornment-weight"
                     endAdornment={
                        <InputAdornment position="end">kg</InputAdornment>
                     }
                     aria-describedby="filled-weight-helper-text"
                     inputProps={{
                        "aria-label": "weight",
                     }}
                  />
                  <FormHelperText id="filled-weight-helper-text">
                     Weight
                  </FormHelperText>
               </FormControl>
              <Box sx={{mt :1, ml: 1}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker />
               </LocalizationProvider>
              </Box>
            </Box>
         </DialogContent>
         <DialogActions>
            <Button autoFocus onClick={() => setOpenCashnoteAddDataBox(false)}>
               Save
            </Button>
         </DialogActions>
      </BootstrapDialog>
   );
}
