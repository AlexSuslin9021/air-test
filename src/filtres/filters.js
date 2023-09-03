import React from 'react';
import s from './filters.module.css';
import {Sort} from "./sort/sort";
import {Transfer} from "./filter/filter";
import {Price} from "./price/price";
import {Avia} from "./avia/avia";

export const Filters = () => {
    return (<div className={s.filters}>
            <Sort/>
            <Transfer/>
            <Price/>
            <Avia/>
        </div>
    )

};


