import { useState } from "react";
import "./ApiCall.css";

function ApiCall({ onApiResponse }) {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const response = {
            query: inputValue,
        };

        // Nach oben geben
        onApiResponse(response);
    };

    return (
        <div className="api-call">
            <div className="into">
                <p>Keine Ahnung, was du mit deiner Freizeit anfangen sollst?
                    Check das Wetter und hol' dir jetzt Ideen!</p>
            </div>
            <form className="search-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Suche..."
                />
                <button type="submit">Suchen</button>
            </form>
        </div>
    );
}

export default ApiCall;
