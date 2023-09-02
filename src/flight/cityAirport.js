import React from 'react';
import s from "./flight.module.css";
import {formatDateTime} from "../common/data";

export const CityAirport = (arrivalAirport,departureAirport,departureCity,arrivalDate,departureDate,arrivalCity) => {
    return (<div>
            <div className={s.cityAirport}>
           <span>{`${departureCity} (${departureAirport})`}</span>→ <span>{`${arrivalCity} (${arrivalAirport})`}</span></div>
            <div className={s.line}></div>
            <div>
                <div className={s.time}>
                    <span>{formatDateTime(departureDate)}</span>
                    <span>20ч 45 мин</span>
                    <span> {formatDateTime(arrivalDate)}</span>
                </div>

                <div className={s.transfer} > <span> 1 пересадка</span></div>
        </div>
        </div>
    )
};

