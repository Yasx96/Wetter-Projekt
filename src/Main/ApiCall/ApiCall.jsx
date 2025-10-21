import { useState } from "react";
import "./ApiCall.css";

function ApiCall({ onApiResponse }) {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!inputValue) return;

        const apiKey = "40786acb77084509ba795031250109";
        const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${inputValue}&lang=de&aqi=no`;

        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error("Stadt nicht gefunden");

            const data = await res.json();

            const weatherData = {
                city: data.location.name,
                country: data.location.country,
                temperature: data.current.temp_c,
                condition: data.current.condition.text,
                icon: data.current.condition.icon,
                feelslike: data.current.feelslike_c,
                humidity: data.current.humidity,
                wind: data.current.wind_kph,
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