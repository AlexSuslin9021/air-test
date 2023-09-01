
import s from "./app.module.css";
import {Filters} from "../filtres/filters";
import {Flights} from "../flight/flights";
import React from "react";

function App() {
    return (
        <div className={s.app}>
            <Filters/>
            <Flights/>
        </div>
    );
}

export default App;
