import { useState } from "react";
import "./ApiCall.css";

function ApiCall({ onApiResponse }) {
    const [inputValue, setInputValue] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            // API-Call mit dem Input als Ort
            const res = await fetch(
                `http://api.weatherapi.com/v1/current.json?key=5a7669a9e4f046ec816101332252608&q=${encodeURIComponent(inputValue)}&aqi=no`
            );

            if (!res.ok) {
                throw new Error("Fehler bei der API-Anfrage");
            }

            const data = await res.json();

            // Werte extrahieren
            const response = {
                location: data.location.name,
                temperatur: data.current.temp_c,
                wetter: data.current.condition.text,
                luftfeuchtigkeit: data.current.humidity
            };

            // An Parent-Komponente weitergeben
            onApiResponse(response);
        } catch (err) {
            console.error(err);
            setError("Konnte Wetterdaten nicht abrufen.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="api-call">
            <div className="into">
                <p>
                    Keine Ahnung, was du mit deiner Freizeit anfangen sollst? Check das Wetter und hol' dir jetzt Ideen!
                </p>
            </div>
            <form className="search-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Such deine Stadt"
                />
                <button type="submit" disabled={loading}>
                    {loading ? "Lade..." : "Suchen"}
                </button>
            </form>
            {error && <p className="error">{error}</p>}
        </div>
    );
}

export default ApiCall;
