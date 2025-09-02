import "./ResultBox.css";

function ResultBox({ searchQuery }) {
    return (
        <div className="result-box">
            {searchQuery ? <p>Ergebnisse für: {searchQuery}</p> : <p>Keine Suche gestartet.</p>}
        </div>
    );
}

export default ResultBox;
