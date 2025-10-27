const wetterStringMapping = {
    "Sunny": "Sonnig",
    "Clear": "Sonnig",
    "Partly cloudy": "Bewölkt",
    "Cloudy": "Bewölkt",
    "Overcast": "Bewölkt",
    "Mist": "Nebel",
    "Patchy rain possible": "Regen",
    "Patchy snow possible": "Schnee",
    "Patchy sleet possible": "Schnee",
    "Patchy freezing drizzle possible": "Regen",
    "Thundery outbreaks possible": "Gewitter",
    "Blowing snow": "Schnee",
    "Blizzard": "Schnee",
    "Fog": "Nebel",
    "Freezing fog": "Nebel",
    "Patchy light drizzle": "Regen",
    "Light drizzle": "Regen",
    "Freezing drizzle": "Regen",
    "Heavy freezing drizzle": "Regen",
    "Patchy light rain": "Regen",
    "Light rain": "Regen",
    "Moderate rain at times": "Regen",
    "Moderate rain": "Regen",
    "Heavy rain at times": "Regen",
    "Heavy rain": "Regen",
    "Light freezing rain": "Schnee",
    "Moderate or heavy freezing rain": "Schnee",
    "Light sleet": "Schnee",
    "Moderate or heavy sleet": "Schnee",
    "Patchy light snow": "Schnee",
    "Light snow": "Schnee",
    "Patchy moderate snow": "Schnee",
    "Moderate snow": "Schnee",
    "Patchy heavy snow": "Schnee",
    "Heavy snow": "Schnee",
    "Ice pellets": "Schnee",
    "Light rain shower": "Regen",
    "Moderate or heavy rain shower": "Regen",
    "Torrential rain shower": "Regen",
    "Light sleet showers": "Schnee",
    "Moderate or heavy sleet showers": "Schnee",
    "Light snow showers": "Schnee",
    "Moderate or heavy snow showers": "Schnee",
    "Light showers of ice pellets": "Schnee",
    "Moderate or heavy showers of ice pellets": "Schnee",
    "Patchy light rain with thunder": "Gewitter",
    "Moderate or heavy rain with thunder": "Gewitter",
    "Patchy light snow with thunder": "Gewitter",
    "Moderate or heavy snow with thunder": "Gewitter",
    "Patchy rain nearby": "Regen"
};

export function getWetterZustandFromString(str) {
    // Extrahiere den Text: str kann entweder String oder {text: string} sein
    let input = "";
    if (!str) {
        console.warn("Ungültiger Input für getWetterZustandFromString:", str);
        return "Error";
    } else if (typeof str === "string") {
        input = str;
    } else if (typeof str === "object" && str.text) {
        input = str.text;
    } else {
        console.warn("Ungültiger Input für getWetterZustandFromString:", str);
        return "Error";
    }

    console.log("Input vom API-Condition-Objekt/String:", input);

    // Bereinigen: trim + alles lowercase + multiple spaces zu einem einzelnen Space
    const cleanedStr = input
        .toString()
        .trim()
        .replace(/\s+/g, " ")
        .toLowerCase();

    console.log("Bereinigter Input:", cleanedStr);

    // Key im Mapping suchen (case-insensitive)
    const key = Object.keys(wetterStringMapping).find(k =>
        k.toString().trim().replace(/\s+/g, " ").toLowerCase() === cleanedStr
    );

    console.log("Gefundener Mapping-Key:", key);

    // Wert aus Mapping zurückgeben, sonst Error
    const result = key ? wetterStringMapping[key] : "Error";
    console.log("Deutscher Wetterzustand:", result);

    return result;
}
