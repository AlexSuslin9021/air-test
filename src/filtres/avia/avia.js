import React from 'react';
import { useSelector } from 'react-redux';

export const Avia = () => {
    const flights = useSelector((state) => state.flights.flights);
    const uniqueCarriers = new Set();

    flights.forEach((el) => {
        uniqueCarriers.add(el.flight.carrier.caption);
    });

    const uniqueCarriersArray = [...uniqueCarriers];

    return (
        <div>
            {uniqueCarriersArray.map((carrier, index) => (
                <div key={index}>
                    <label htmlFor="">
                        <input type="checkbox" />
                        {carrier}
                    </label>
                </div>
            ))}
        </div>
    );
};


