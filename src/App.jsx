import { useState } from "react";
import "./App.css";

import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx"
import ApiCall from "./Main/ApiCall/ApiCall.jsx";
import ApiResponse from "./Main/ApiResponse/ApiResponse.jsx";
import Suggestion from "./Main/Suggestion/Suggestion.jsx";
import CompanyVision from "./Main/CompanyVision/CompanyVision.jsx";

function App() {
    const [apiResponse, setApiResponse] = useState(null);

    return (
        <div className="app">
            {/* Header */}
            <Header />

            {/* Inhalt */}
            <main className="main">
                <ApiCall onApiResponse={setApiResponse} />

                <ApiResponse apiResponse={apiResponse} />

                <div className="suggestions-div">
                    <div className="suggestion-child">
                        <Suggestion />
                    </div>
                    <div className="suggestion-child">
                        <CompanyVision />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default App;
