import { useState } from "react";
import "./ApiCall.css"
import aktivitaeten from "../Data/ActivityData.js";

function ApiCall({ onApiResponse }) {
    const [inputValue, setInputValue] = useState("");
    console.log("input gegeben")

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!inputValue) return;

        const apiKey = "40786acb77084509ba795031250109";
        const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${inputValue}&lang=en&aqi=no`;

        console.log("API-Call starten")

        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error("Stadt nicht gefunden");

            const data = await res.json();
            console.log("API-Daten geholt")
            console.log("Api Condition: " + data.current.condition.text);
            const passendeAktivitaeten = aktivitaeten.findeAktivitaet(
                data.current.condition.text,
                data.current.temp_c
            );
            console.log("Aktivität geholt: " + passendeAktivitaeten.name);

            const weatherData = {
                city: data.location.name,
                country: data.location.country,
                temperature: data.current.temp_c,
                condition: data.current.condition.text,
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
            <div className="into">
                <p>
                    Keine Ahnung, was du mit deiner Freizeit anfangen sollst?
                    Check das Wetter und hol' dir jetzt Ideen!
                </p>
            </div>
            <form className="search-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Such deine Stadt"
                />
                <button type="submit">Suchen</button>
            </form>
        </div>
    );
}

export default ApiCall;