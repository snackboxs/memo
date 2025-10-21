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
   const {openCashnoteDialogBox, setOpenCashnoteDialogBox} = useCashContext();

   return (
      <BootstrapDialog
         onClose={() => setOpenCashnoteDialogBox(false)}
         aria-labelledby="customized-dialog-title"
         open={openCashnoteDialogBox}
      >
         <DialogTitle
            sx={{ m: 0, p: 2, textAlign: "center" }}
            id="customized-dialog-title"
         >
            Add New Cash
         </DialogTitle>
         <IconButton
            aria-label="close"
            onClick={() => setOpenCashnoteDialogBox(false)}
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
            <Button autoFocus onClick={() => setOpenCashnoteDialogBox(false)}>
               Save
            </Button>
         </DialogActions>
      </BootstrapDialog>
   );
}
