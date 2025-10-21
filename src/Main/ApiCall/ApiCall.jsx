import { useState } from "react";
import "./ApiCall.css"
import aktivitaeten from "../Data/ActivityData.js";
import {getWetterZustandFromString} from "../Data/WeatherDataMapping.js";

function ApiCall({ onApiResponse }) {
    const [inputValue, setInputValue] = useState("");          // für Anzeige im Input
    const [suggestions, setSuggestions] = useState([]);
    const [selectedQuery, setSelectedQuery] = useState("");    // für API-Call
    const apiKey = "40786acb77084509ba795031250109";

    // Vorschläge holen für Autocomplete
    const fetchSuggestions = async (query) => {
        if (!query) {
            setSuggestions([]);
            return;
        }

        try {
            const url = `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${query}`;
            const res = await fetch(url);
            if (!res.ok) throw new Error("Fehler beim Holen der Vorschläge");
            const data = await res.json();
            setSuggestions(data);
        } catch (err) {
            console.error(err);
            setSuggestions([]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selectedQuery && !inputValue) return; // entweder ausgewählt oder manuell eingegeben

        const query = selectedQuery || inputValue;
        const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}&lang=en&aqi=no`;

        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error("Stadt nicht gefunden");

            const data = await res.json();

            const passendeAktivitaeten = aktivitaeten.findeAktivitaet(
                data.current.condition.text,
                data.current.temp_c
            );

            const conditionDe = getWetterZustandFromString(data.current.condition.text);

            const weatherData = {
                city: data.location.name,
                country: data.location.country,
                temperature: data.current.temp_c,
                condition: conditionDe,
                icon: data.current.condition.icon,
                feelslike: data.current.feelslike_c,
                humidity: data.current.humidity,
                wind: data.current.wind_kph,
                activity: passendeAktivitaeten.name
            };

            onApiResponse(weatherData);
        } catch (error) {
            console.error("Fehler beim API-Aufruf:", error);
            onApiResponse({ error: error.message });
        }
    };

    return (
        <div className="api-call">
            <div className="intro">
                <p>
                    Keine Ahnung, was du mit deiner Freizeit anfangen sollst? Check das Wetter und hol' dir jetzt Ideen!
                </p>
            </div>

            <form className="search-form" onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => {
                            const val = e.target.value;
                            setInputValue(val);
                            setSelectedQuery(""); // Rücksetzung, falls manuell tippt
                            fetchSuggestions(val);
                        }}
                        placeholder="Such deine Stadt"
                    />
                    {suggestions.length > 0 && (
                        <ul className="suggestions-list">
                            {suggestions.map((s) => (
                                <li
                                    key={s.name + s.country}
                                    onClick={() => {
                                        setInputValue(s.name);       // nur Name anzeigen
                                        setSelectedQuery(s.url || s.name); // URL für API-Call nutzen
                                        setSuggestions([]);
                                    }}
                                >
                                    {s.name}, {s.region}, {s.country}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <button className="submit-btn" type="submit">Suchen</button>
            </form>
        </div>
    );
}

export default ApiCall;
