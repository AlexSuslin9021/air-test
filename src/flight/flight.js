import React from 'react';
import s from './flight.module.css'
import data from "../data/flights.json";
import {CityAirport} from "./cityAirport";

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

            <CityAirport/>
                <div className={s.line2}> </div>
            <CityAirport/>


            <button className={s.button}>ВЫБРАТЬ</button>
        </div>
    );
};

