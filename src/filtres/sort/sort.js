import React from 'react';
import s from '../filters.module.css';
import { useDispatch } from 'react-redux';
import { sorting, sortingArrivalTime } from '../../flight/flight.slice';

export const Sort = () => {
    const dispatch = useDispatch();

    const sortPrice = (direction) => {
        dispatch(sorting({ direction }));
    };

    const sortPathTime = (direction) => {
        dispatch(sortingArrivalTime({ direction }));
    };

    return (
        <div>
            <h4>Сортировать:</h4>
            <div>
                <input
                    type="radio"
                    id="ascending"
                    name="sorting"
                    className={s.radioInput}
                    value="ascending"
                    onChange={() => sortPrice('ascending')} // Используйте sortPrice
                />
                <label htmlFor="ascending" className={s.radioLabel}>
                    по возрастанию цены
                </label>
            </div>
            <div>
                <input
                    type="radio"
                    id="descending"
                    name="sorting"
                    className={s.radioInput}
                    value="descending"
                    onChange={() => sortPrice('descending')} // Используйте sortPrice
                />
                <label htmlFor="descending" className={s.radioLabel}>
                    по убыванию цены
                </label>
            </div>
            <div>
                <input
                    type="radio"
                    id="arrivalTime"
                    name="sorting"
                    className={s.radioInput}
                    value="arrivalTime"
                    onChange={() => sortPathTime('ascending')} // Используйте sortPathTime
                />
                <label htmlFor="arrivalTime" className={s.radioLabel}>
                    по времени в пути
                </label>
            </div>
        </div>
    );
};





