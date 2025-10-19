import { createSlice } from "@reduxjs/toolkit";
import { type PaletteMode } from '@mui/material'

interface ThemeState {
   themeMode: PaletteMode;
}

const initialState: ThemeState = {
   themeMode: (localStorage.getItem('themeMode') as PaletteMode) || "light"
}

export const themeSlice = createSlice({
   name: "theme",
   initialState,
   reducers: {
      setMode: (state) => {
         const newMode = state.themeMode === "dark" ? "light" : "dark";
         state.themeMode = newMode;
         localStorage.setItem('themeMode', newMode);
      },
   },
});

export const { setMode } = themeSlice.actions;
export default themeSlice.reducer;


