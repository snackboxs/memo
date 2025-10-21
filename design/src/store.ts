import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store