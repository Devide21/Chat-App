// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Features';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});
