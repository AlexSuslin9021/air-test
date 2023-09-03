import { createSlice } from '@reduxjs/toolkit';

import flightsData from '../data/flights.json';


const initialState = {
    flights: flightsData.result.flights,
};
console.log(initialState.flights)

const flightsSlice = createSlice({
    name: 'flights',
    initialState,
    reducers: {
        sortingPrice(state, action) {
            const { direction } = action.payload;

            state.flights.sort((a, b) => {
                const priceA = parseFloat(a.flight.price.total.amount);
                const priceB = parseFloat(b.flight.price.total.amount);
                if (direction === 'ascending') {
                    return priceA - priceB;
                } else if (direction === 'descending') {
                    return priceB - priceA;
                }
                return 0;
            });
        },
        sortingArrivalTime(state, action) {

            state.flights.sort((a, b) => {
                const durationA = getTotalDuration(a.flight.legs);
                const durationB = getTotalDuration(b.flight.legs);
                return durationA - durationB;
            });
        },
        flightsWithTransfers(state, action) {
            return {
                ...state,
                flights: state.flights.filter((f) => f.flight.legs.every((leg) => leg.segments.length === 2)),
            };

        },
        flightsNoTransfers(state, action) {
            return {
                ...state,
                flights: state.flights.filter((f) => f.flight.legs.every((leg) => leg.segments.length > 2)),
            };
            }


    },

});

function getTotalDuration(legs) {
    return legs.reduce((totalDuration, leg) => totalDuration + leg.duration, 0);
}
export const sorting = flightsSlice.actions.sortingPrice;
export const sortingArrivalTime = flightsSlice.actions.sortingArrivalTime;
export const flightsWithTransfers = flightsSlice.actions.flightsWithTransfers;
export const flightsNoTransfers = flightsSlice.actions.flightsNoTransfers;
export const flights= flightsSlice.reducer;

