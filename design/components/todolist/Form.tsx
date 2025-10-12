import { Container, OutlinedInput, Toolbar } from "@mui/material";
export default function Form() {
   return (
      <Container maxWidth="sm">
         <Toolbar sx={{marginBottom: 3}}/>
         <form>
            <OutlinedInput fullWidth></OutlinedInput>
         </form>
      </Container>
   );
}
