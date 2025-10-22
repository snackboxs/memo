import AppProvider from "./AppProvider.tsx";
import { RouterProvider } from "react-router";
import { router } from "./router.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
   return (
      <QueryClientProvider client={queryClient}>
         <AppProvider>
            <RouterProvider router={router} />
         </AppProvider>
      </QueryClientProvider>
   );
}
