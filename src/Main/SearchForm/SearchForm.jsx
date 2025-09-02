import "./SearchForm.css";

function SearchForm({ inputValue, setInputValue, handleSubmit }) {
    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Suche..."
            />
            <button type="submit">Suchen</button>
        </form>
    );
}

export default SearchForm;
