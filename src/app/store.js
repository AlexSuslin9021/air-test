import { configureStore } from '@reduxjs/toolkit';
import {flights} from "../flight/flight.slice";

export const store = configureStore({
    reducer: {
       flights,
    },
});
