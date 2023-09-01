import React from 'react';


export const Filter = () => {
    return (
        <div >
            <h4> Фильтровать</h4>
            <div>
                <input type="checkbox" id="oneStop" />
                <label htmlFor="oneStop" >
                    - 1 пересадка
                </label>
            </div>
            <div>
                <input type="checkbox" id="nonStop" />
                <label htmlFor="nonStop" >
                    - без пересадок
                </label>
            </div>
        </div>
    );
};
