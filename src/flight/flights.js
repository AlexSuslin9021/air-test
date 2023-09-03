import React from 'react';
import { formatDateTime } from '../common/data';
import s from './flight.module.css'
import {useSelector} from "react-redux";


export const Flights = () => {
     const flights = useSelector((state) => state.flights.flights);
    console.log(flights)
    const groupedFlights = [];
    for (let i = 0; i < flights.length; i += 2) {
        const outboundFlight = flights[i];
        const inboundFlight = flights[i + 1];
        if (outboundFlight && inboundFlight) {
            groupedFlights.push({ outbound: outboundFlight, inbound: inboundFlight });
        }
    }

    const renderFlightPair = (flightPair, index) => (
        <div key={index} className={s.flightPair}>
            <div className={s.flightContainer}>
                <div className={s.flightDetails}>
                    {renderLeg(flightPair.outbound.flight.legs, flightPair.outbound.flight.price.total.amount)} {/* Передаем цену */}
                </div>
            </div>
            <div className={s.flightContainer}>
                <div className={s.flightDetails}>
                    {renderLeg(flightPair.inbound.flight.legs, flightPair.inbound.flight.price.total.amount)} {/* Передаем цену */}
                </div>
            </div>
        </div>
    );

    const renderLeg = (legs, price) => (
        <div className={s.legContainer}>
            <div className={s.header}>
                <div>logo</div>
                <div className={s.priceBlock}>
                    {/* Отображаем цену для одного взрослого пассажира */}
                    {price && (
                        <span className={s.price}>Стоимость для одного взрослого пассажира: {price} руб.</span>
                    )}
                </div>
            </div>
            {legs.map((leg, legIndex) => (
                <div key={legIndex}>
                    <div className={s.routeInfo}>
                        <div className={s.route}>
                            {leg.segments.map((segment, segmentIndex) => (
                                <div key={segmentIndex} className={s.segmentContainer}>
                                    <div className={s.cityAirport}>
                                        {segment.departureCity && `${segment.departureCity.caption} (${segment.departureAirport.caption})`}
                                        {segment.arrivalCity && ` → ${segment.arrivalCity.caption} (${segment.arrivalAirport.caption})`}
                                        <div className={s.line}></div>
                                    </div>
                                    <div className={s.time}>
                                        {segment.departureDate && <span> {formatDateTime(segment.departureDate)}</span>}
                                        {leg.duration && (
                                            <span>В пути {Math.floor(leg.duration / 60)}ч {leg.duration % 60}мин</span>
                                        )}
                                        {segment.arrivalDate && <span> {formatDateTime(segment.arrivalDate)}</span>}
                                    </div>
                                    {segment.airline && <span className={s.company}>Рейс выполняет: {segment.airline.caption}</span>}

                                </div>

                            ))}

                        </div>

                    </div>

                </div>
            ))}
            <button className={s.button}>ВЫБРАТЬ</button>
        </div>
    );

    return (
        <div className={s.flights}>
            {groupedFlights.map((flightPair, index) => renderFlightPair(flightPair, index))}
        </div>
    );
};