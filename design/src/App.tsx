import AppProvider from "./AppProvider.tsx";
import { RouterProvider } from "react-router"; 
import {router} from "./router.tsx"

export default function App() {
   return (
      <>
         <AppProvider>
            <RouterProvider router={router} />
         </AppProvider>
      </>
   );
}
