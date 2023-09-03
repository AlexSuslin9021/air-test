import React from 'react';
import { useDispatch } from 'react-redux';
import {flightsNoTransfers, flightsWithTransfers} from "../../flight/flight.slice";


export const Transfer = () => {
    const dispatch = useDispatch();

    const handleOneStopChange = () => {
        dispatch(flightsWithTransfers()); // Вызываем фильтрацию с пересадкой
    };

    const handleNonStopChange = () => {
        dispatch(flightsNoTransfers()); // Вызываем фильтрацию без пересадки
    };

    return (
        <div>
            <h4>Фильтровать:</h4>
            <div>
                <input
                    type="checkbox"
                    id="oneStop"
                    onChange={handleOneStopChange} // Обработчик для 1 пересадки
                />
                <label htmlFor="oneStop">- 1 пересадка</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="nonStop"
                    onChange={handleNonStopChange} // Обработчик для без пересадок
                />
                <label htmlFor="nonStop">- без пересадок</label>
            </div>
        </div>
    );
};

