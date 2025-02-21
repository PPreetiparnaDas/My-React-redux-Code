import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from './reducer';

export const appStore = configureStore({
    reducer: { app: appReducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(), 
});
