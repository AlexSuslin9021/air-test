import React from 'react';
import data from '../../data/flights.json'
import { useDispatch } from 'react-redux';
import { filterFlightsByCarrier } from '../../flight/flight.slice';

export const Avia = () => {
    const dispatch = useDispatch();
    const uniqueCarriers = new Set(); // Создаем Set для хранения уникальных названий авиакомпаний
    const flights = data.result.flights
    flights.forEach((el) => {
        uniqueCarriers.add(el.flight.carrier.caption); // Добавляем уникальные названия авиакомпаний
    });

    const handleCarrierChange = (selectedCarrier) => {
        dispatch(filterFlightsByCarrier(selectedCarrier));
    };

    return (
        <div>
            {Array.from(uniqueCarriers).map((carrier, index) => (
                <div key={index}>
                    <label htmlFor="">
                        <input
                            type="checkbox"
                            onChange={() => handleCarrierChange(carrier)}
                        />
                        {carrier}
                    </label>
                </div>
            ))}
        </div>
    );
};




