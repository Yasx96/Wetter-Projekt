import "./ApiResponse.css";

function ApiResponse({ apiResponse }) {
    if (!apiResponse) {
        return null; // Nichts anzeigen, wenn leer
    }

    return (
        <div className="api-response">
            <div className="result-box">
                <p>Ergebnisse für: {apiResponse.query}</p>
            </div>
        </div>
    );
}

export default ApiResponse;
