import React from 'react';

export const Price = () => {
    return (
        <div>
            <h4> Цена</h4>
            <div>
                <label htmlFor="">
                    От
                <input type="number"/>
                </label>
            </div>
            <div>
                <label htmlFor="">
                    До
                    <input type="number"/>
                </label>
            </div>
        </div>
    );
};

