import React from 'react';
import s from './flight.module.css'
import data from "../data/flights.json";

export const Flight = () => {
    const flights = data.result.flights;
    return (
        <div className={s.flight}>
            <div className={s.header}>
                <div> logo</div>
                <div className={s.priceBlock}>
                    <span className={s.price}>price</span>
                    <span className={s.price}> Стоимость для одного взрослого пассажира</span>
                </div>
            </div>

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

                <div className={s.line2}> </div>


            </div>
            <button className={s.button}>ВЫБРАТЬ</button>
        </div>
    );
};

