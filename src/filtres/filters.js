import React from 'react';
import s from './filters.module.css';
import {Sort} from "./sort/sort";
import {Filter} from "./filter/filter";
import {Price} from "./price/price";
import {Avia} from "./avia/avia";

export const Filters = () => {
    return (<div className={s.filters}>
            <Sort/>
            <Filter/>
            <Price/>
            <Avia/>
        </div>
    )

};


