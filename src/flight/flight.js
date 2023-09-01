import React from 'react';
import s from './flight.module.css'
import data from "../data/flights.json";
export const Flight = () => {
    const flights = data.result.flights;
    return (
        <div className={s.flight}>

        </div>
    );
};

