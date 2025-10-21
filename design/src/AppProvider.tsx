import { createContext, useContext, useState, useMemo } from "react";

import type { Dispatch, SetStateAction } from "react";

import {
   createTheme,
   CssBaseline,
   ThemeProvider,
   type Theme,
   type PaletteMode,
} from "@mui/material";
import { useSelector } from "react-redux";
import { type RootState } from "./store";

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
   setMode: Dispatch<SetStateAction<PaletteMode>>;
   currentPage: string | null;
   setCurrentPage: Dispatch<SetStateAction<string | null>>;
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
   mode: "light",
   setMode: () => {},
   currentPage: null,
   setCurrentPage: () => {},
});

const getMuiTheme = (reduxmode: PaletteMode): Theme =>
   createTheme({
      palette: {
         mode: reduxmode,
         primary: {
            main: "#1976d2",
         },
         secondary: {
            main: "#9c27b0",
         },
      },
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
   const [mode, setMode] = useState<PaletteMode>("light");
   const [openDialogBox, setOpenDialogBox] = useState(false);
   const [openAddNewTodolistDataBox, setOpenAddNewTodolistDataBox] =
      useState(false);
   const [currentNote, setCurrentNote] = useState<string | null>(null); /// active note for left drawer for todolist
   const [currentPage, setCurrentPage] = useState<string | null>(null); // from appbar [cash note, todolist, diary]

   const theme = useMemo(
      () =>
         createTheme({
            palette: {
               mode,
            },
         }),
      [mode]
   );

   const themeMode = useSelector((state: RootState) => state.theme.themeMode);
   const reduxTheme = useMemo(() => getMuiTheme(themeMode), [themeMode]);

   return (
      <ThemeProvider theme={reduxTheme}>
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
               currentPage,
               setCurrentPage,
            }}
         >
            {children}
         </AppContext.Provider>
         <CssBaseline />
      </ThemeProvider>
   );
}
