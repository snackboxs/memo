import {
   createContext,
   useContext,
   useState,
} from "react";

import type { Dispatch, SetStateAction } from "react";

interface AppContextType {
   openDrawer: boolean;
   setOpenDrawer: Dispatch<SetStateAction<boolean>>;
   openDialogBox: boolean;
   setOpenDialogBox: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextType>({
   openDrawer: false,
   setOpenDrawer: () => {}, // dummy function
   openDialogBox: false,
   setOpenDialogBox: () => {},
});

export function useAppContext() {
   return useContext(AppContext);
}
export default function AppProvider({
   children,
}: {
   children: React.ReactNode;
}) {
   const [openDrawer, setOpenDrawer] = useState(false);
   const [openDialogBox, setOpenDialogBox] = useState(false);
   return (
      <AppContext.Provider value={{ openDrawer, setOpenDrawer, openDialogBox, setOpenDialogBox }}>
         {children}
      </AppContext.Provider>
   );
}
