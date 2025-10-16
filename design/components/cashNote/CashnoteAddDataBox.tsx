import {
   Dialog,
   DialogTitle,
   DialogActions,
   DialogContent,
   IconButton,
   Button,
   OutlinedInput,
   styled,
} from "@mui/material";

import { Close as CloseIcon } from "@mui/icons-material";
import { useCashContext } from "../../pages/cashnote/CashnoteProvider";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
   "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
   },
   "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
   },
}));

export default function CashnoteDialogBox() {
   const {openCashnoteAddDataBox, setOpenCashnoteAddDataBox} = useCashContext();

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
            <form>
               <OutlinedInput
                  multiline
                  sx={{ my: 2, width: 500 }}
                  placeholder="Enter Your Notes"
               />
            </form>
         </DialogContent>
         <DialogActions>
            <Button autoFocus onClick={() => setOpenCashnoteAddDataBox(false)}>
               Save
            </Button>
         </DialogActions>
      </BootstrapDialog>
   );
}
