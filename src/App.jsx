import { useState } from "react";
import "./App.css";

import Header from "./Header/Header";
import SearchForm from "./Main/SearchForm/SearchForm.jsx";
import ResultBox from "./Main/ResultBox/ResultBox.jsx";

function App() {
    const [inputValue, setInputValue] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchQuery(inputValue);
    };

    return (
        <div className="app">
            {/* Header */}
            <Header />

            {/* Inhalt */}
            <main className="main">
               <div className="search-div">
                   <SearchForm
                       inputValue={inputValue}
                       setInputValue={setInputValue}
                       handleSubmit={handleSubmit}
                   />
               </div>
                <div className="result-div">
                    <ResultBox searchQuery={searchQuery} />
                </div>
            </main>
        </div>
    );
}

export default App;
