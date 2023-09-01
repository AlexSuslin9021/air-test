import React from 'react';
import s from '../filters.module.css';

export const Sort = () => {
    return (
        <div>
            <h4>Сортировать:</h4>
            <div>
                <input type="radio" id="ascending" name="sorting" className={s.radioInput} value="ascending" />
                <label htmlFor="ascending" className={s.radioLabel}>
                    по возрастанию цены
                </label>
            </div>
            <div>
                <input type="radio" id="descending" name="sorting" className={s.radioInput} value="descending" />
                <label htmlFor="descending" className={s.radioLabel}>
                    по убыванию цены
                </label>
            </div>
            <div>
                <input type="radio" id="arrivalTime" name="sorting" className={s.radioInput} value="arrivalTime" />
                <label htmlFor="arrivalTime" className={s.radioLabel}>
                    по времени в пути
                </label>
            </div>
        </div>
    );
};


