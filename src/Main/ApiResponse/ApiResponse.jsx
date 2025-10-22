import "./ApiResponse.css";

function ApiResponse({ apiResponse }) {
    if (!apiResponse) {
        return null;
    }

    if (apiResponse.error) {
        return (
            <div className="api-response error">
                <p>Fehler: {apiResponse.error}</p>
                <p>Bitte überprüfe die Eingabe und versuche es erneut.</p>
            </div>
        );
    }

    return (
        <div className="api-response">
            <div className="result-box">
                <h2 className="ueberschrift-result-box">
                    Wetter in {apiResponse.city}, {apiResponse.country}
                </h2>

                <div className="result-box-content">
                    <div className="weather-left-side">
                        <div className="weather-info">
                            <div className="weather-details">
                                <p className="temperature">Temperatur: {apiResponse.temperature}°C</p>
                                <p>{apiResponse.condition}</p>
                                <p>Gefühlt: {apiResponse.feelslike}°C</p>
                                <p>Luftfeuchtigkeit: {apiResponse.humidity}%</p>
                                <p>Wind: {apiResponse.wind} km/h</p>
                            </div>
                            <img
                                src={apiResponse.icon}
                                alt={apiResponse.condition}
                                className="weather-icon"
                            />
                        </div>
                    </div>

                    <div className="weather-right-side">
                        <div className="activity-details">
                            <p>{apiResponse.activity}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ApiResponse;
