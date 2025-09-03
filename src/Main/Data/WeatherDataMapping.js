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
    "Moderate or heavy snow with thunder": "Gewitter"
};

function getWetterZustandFromString(str) {
    return wetterStringMapping[str] || "Error";
}

// Beispiele
console.log(getWetterZustandFromString("Sunny"));                  // Sonnig
console.log(getWetterZustandFromString("Heavy snow"));             // Schnee
console.log(getWetterZustandFromString("Patchy light rain"));      // Regen
console.log(getWetterZustandFromString("Thundery outbreaks possible")); // Gewitter
console.log(getWetterZustandFromString("Fog"));                    // Nebel
