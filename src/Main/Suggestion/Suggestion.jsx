import { useEffect, useState } from "react";
import "./Suggestion.css";
import aktivitaeten from "../Data/ActivityData.js";
import { getWetterZustandFromString } from "../Data/WeatherDataMapping.js";

function Suggestion() {
    const [weatherData, setWeatherData] = useState(null);
    const apiKey = "40786acb77084509ba795031250109";
    const city = "Frankfurt";

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=en&aqi=no`;
                const res = await fetch(url);
                if (!res.ok) throw new Error("Stadt nicht gefunden");

                const data = await res.json();

                const passendeAktivitaeten = aktivitaeten.findeAktivitaet(
                    data.current.condition.text,
                    data.current.temp_c
                );

                const conditionDe = getWetterZustandFromString(data.current.condition.text);

                setWeatherData({
                    erfolgreich: true,
                    temperature: data.current.temp_c,
                    condition: conditionDe,
                    activity: passendeAktivitaeten
                        ? passendeAktivitaeten.beschreibungPerfekt
                        : "Keine passende Aktivität gefunden."
                });
            } catch (error) {
                console.error("Fehler beim API-Aufruf:", error);
                setWeatherData({
                    erfolgreich: false,
                    temperature: null,
                    condition: null,
                    activity: null
                });
            }
        };

        fetchWeather();
    }, []);

    if (!weatherData) {
        return <p>Lade Vorschläge…</p>;
    }

    const getTextForCondition = (condition) => {
        switch (condition) {
            case "Sonnig":
                return "sonnige";
            case "Bewölkt":
                return "bewölkte";
            case "Regen":
                return "verregnete";
            case "Schnee":
                return "verschneite";
            case "Gewitter":
                return "gewittrige";
            case "Nebel":
                return "neblige";
            default:
                return "";
        }
    };

    return (
        <div className="suggestion">
            <img
                className="couple-image"
                src="https://cdn.pixabay.com/photo/2017/08/01/20/52/happy-holidays-2567915_960_720.jpg"
                alt="suggestion-frankfurt"
            />
            <p>
                {weatherData.erfolgreich
                    ? `In Frankfurt sind heute ${getTextForCondition(weatherData.condition)} ${weatherData.temperature}°C. ${weatherData.activity}`
                    : "Wir können die Daten deiner Stadt aktuell nicht abrufen. Trotzdem kein Grund, vor dem Handy zu sitzen - nimm ein gutes Buch oder genieß die frische Luft!"}
            </p>
        </div>
    );
}

export default Suggestion;
