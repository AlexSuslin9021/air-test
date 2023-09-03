import { createSlice } from '@reduxjs/toolkit';

import flightsData from '../data/flights.json';


const initialState = {
    flights: flightsData.result.flights,
};

const flightsSlice = createSlice({
    name: 'flights',
    initialState,
    reducers: {

    },
});

export const { } = flightsSlice.actions;
export const flight= flightsSlice.reducer;