import React from 'react';
import s from "./flight.module.css";
import data from '../data/flights.json';

export const Flights = () => {
    const flights = data.result.flights;

    return (
        <div className={s.flights}>
            {flights.map((f, index) => (
                <div key={index}>
                    <h3> рейс {index + 1}</h3>
                    <div className={s.carrier}>{f.flight.carrier.caption}</div>
                    <div className={s.carrier}>{f.flight.legs.map(l => <div>
                        <h2> Место вылета прилета</h2>
                        <div>{l.segments.map(s => <div>
                            {s.departureAirport.caption}
                            <h2>Время дата</h2>
                            <div> Время вылета {s.departureDate}</div>
                            <div> Время прилета {s.arrivalDate}</div>
                            <div> Рейс выполняет {s.airline.caption}</div>
                        </div>)}

                        </div>
                    </div>)}</div>



                    <br/>
                </div>
            ))}
        </div>
    );
};


