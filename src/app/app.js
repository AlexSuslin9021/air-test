
import s from "./app.module.css";
import {Filters} from "../filtres/filters";
import {Flight} from "../flight/flight";
import React from "react";

function App() {
    return (
        <div className={s.app}>
            <Filters/>
            <Flight/>
        </div>
    );
}

export default App;
