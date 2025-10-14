import { createContext, useContext, useState, useMemo } from "react";

import type { Dispatch, SetStateAction } from "react";

import {
   createTheme,
   CssBaseline,
   ThemeProvider,
   type PaletteMode,
} from "@mui/material";

interface AppContextType {
   openDrawer: boolean;
   setOpenDrawer: Dispatch<SetStateAction<boolean>>;
   openDialogBox: boolean;
   setOpenDialogBox: Dispatch<SetStateAction<boolean>>;
   openAddNewTodolistDataBox: boolean;
   setOpenAddNewTodolistDataBox: Dispatch<SetStateAction<boolean>>;
   currentNote: string | null;
   setCurrentNote: Dispatch<SetStateAction<string | null>>;
   mode: PaletteMode;
   // 💡 Change: setMode is now Dispatch<SetStateAction<PaletteMode>>
   setMode: Dispatch<SetStateAction<PaletteMode>>;
}

const AppContext = createContext<AppContextType>({
   openDrawer: false,
   setOpenDrawer: () => {}, // dummy function
   openDialogBox: false,
   setOpenDialogBox: () => {},
   openAddNewTodolistDataBox: false,
   setOpenAddNewTodolistDataBox: () => {},
   currentNote: null,
   setCurrentNote: () => {},
   mode: "dark",
   setMode: () => {},
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
   const [mode, setMode] = useState<PaletteMode>("dark");
   const [openDialogBox, setOpenDialogBox] = useState(false);
   const [openAddNewTodolistDataBox, setOpenAddNewTodolistDataBox] =
      useState(false);
   const [currentNote, setCurrentNote] = useState<string | null>(null);

   const theme = useMemo(
      () =>
         createTheme({
            palette: {
               mode,
            },
         }),
      [mode]
   );
   return (
      <ThemeProvider theme={theme}>
         <AppContext.Provider
            value={{
               openDrawer,
               setOpenDrawer,
               openDialogBox,
               setOpenDialogBox,
               openAddNewTodolistDataBox,
               setOpenAddNewTodolistDataBox,
               currentNote,
               setCurrentNote,
               mode,
               setMode,
            }}
         >
            {children}
         </AppContext.Provider>
         <CssBaseline />
      </ThemeProvider>
   );
}
