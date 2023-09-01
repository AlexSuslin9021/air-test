import React from 'react';
import s from "./flight.module.css";

export const CityAirport = () => {
    return (<div>
            <div className={s.cityAirport}>
                <span> Москва, Шереметьево(СВО) </span> → <span>Лондон, Лондон, Хитроу (ЛНР)</span></div>
            <div className={s.line}></div>
            <div>
                <div className={s.time}>
                    <span>20:40 18 avg, vt</span>
                    <span>20ч 45 мин</span>
                    <span> 19 avg, sr 09:25</span>
                </div>

                <div className={s.transfer} > <span> 1 пересадка</span></div>
        </div>
        </div>
    )
};

