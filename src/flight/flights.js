import React from 'react';
import st from "./flight.module.css";
import data from '../data/flights.json';
import { formatDateTime } from "../common/data";

export const Flights = () => {
    const flights = data.result.flights;

    const groupedFlights = [];
    for (let i = 0; i < flights.length; i += 2) {
        const outboundFlight = flights[i];
        const inboundFlight = flights[i + 1];
        if (outboundFlight && inboundFlight) {
            groupedFlights.push({outbound: outboundFlight, inbound: inboundFlight});
        }
    }

    const renderFlightPair = (flightPair, index) => (
        <div key={index} className={st.flightPair}>
            <div className={st.flightContainer}>
                <h3>Рейс {index * 2 + 1}</h3>
                <div className={st.flightDetails}>
                    {renderLeg(flightPair.outbound.flight.legs)}
                </div>
            </div>
            <div className={st.flightContainer}>
                <h3>Рейс {index * 2 + 2}</h3>
                <div className={st.flightDetails}>
                    {renderLeg(flightPair.inbound.flight.legs)}
                </div>
            </div>
        </div>
    );

    const renderLeg = (legs) => (
        <div className={st.legContainer}>
            {legs.map((leg, legIndex) => (
                <div key={legIndex}>
                    <div className={st.routeInfo}>
                        <div className={st.route}>
                            {leg.segments.map((segment, segmentIndex) => (
                                <div key={segmentIndex} className={st.segmentContainer}>
                                    <div className={st.header}>
                                        {segment.departureCity && `${segment.departureCity.caption} (${segment.departureAirport.caption})`}
                                        {segment.arrivalCity && ` → ${segment.arrivalCity.caption} (${segment.arrivalAirport.caption})`}
                                        <div className={st.line}></div>
                                    </div>
                                    <div className={st.time}>
                                        {segment.departureDate && <span> {formatDateTime(segment.departureDate)}</span>}
                                        {leg.duration &&
                                            <span>В пути {Math.floor(leg.duration / 60)}ч {leg.duration % 60}мин</span>}
                                        {segment.arrivalDate && <span> {formatDateTime(segment.arrivalDate)}</span>}
                                    </div>
                                    {segment.airline && <span>Рейс выполняет: {segment.airline.caption}</span>}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            ))}
        </div>
    );

    return (
        <div className={st.flights}>
            {groupedFlights.map((flightPair, index) => renderFlightPair(flightPair, index))}
        </div>
    );

}






