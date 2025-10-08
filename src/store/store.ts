import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './slices/uiSlice';
import navbarReducer from '@/features/navbar/store/navbarSlice';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    navbar: navbarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
