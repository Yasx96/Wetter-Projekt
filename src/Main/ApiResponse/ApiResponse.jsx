import "./ApiResponse.css";

function ApiResponse({ apiResponse }) {
    if (!apiResponse) {
        return null; // Nichts anzeigen, wenn leer
    }

    return (
        <div className="api-response">
            <div className="result-box">
                <h3>Ergebnisse für: {apiResponse.location}</h3>
                <p>
                    <strong>Temperatur:</strong> {apiResponse.temperatur}°C
                </p>
                <p>
                    <strong>Wetterlage:</strong> {apiResponse.wetter}
                </p>
                <p>
                    <strong>Luftfeuchtigkeit:</strong> {apiResponse.luftfeuchtigkeit}%
                </p>
            </div>
        </div>
    );
}

export default ApiResponse;
