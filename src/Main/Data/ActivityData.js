import {getWetterZustandFromString} from "./WeatherDataMapping.js";

class Aktivitaeten {
    constructor() {
        this.liste = [
            // Draußen, flexibel
            {
                name: "Spaziergang im Park oder Wald",
                wetter: ["Sonnig", "Bewölkt"],
                temperatur: { min: -10, max: 40 }
            },
            {
                name: "Picknick im Grünen",
                wetter: ["Sonnig"],
                temperatur: { min: 15, max: 35 }
            },
            {
                name: "Joggen gehen",
                wetter: ["Sonnig", "Bewölkt"],
                temperatur: { min: 0, max: 25 }
            },
            {
                name: "Radtour machen",
                wetter: ["Sonnig", "Bewölkt"],
                temperatur: { min: 5, max: 30 }
            },
            {
                name: "Wandern in den Bergen",
                wetter: ["Sonnig", "Bewölkt"],
                temperatur: { min: -5, max: 25 }
            },
            {
                name: "Fotosafari in der Stadt",
                wetter: ["Sonnig", "Bewölkt"],
                temperatur: { min: 0, max: 30 }
            },

            // Sommer-Outdoor
            {
                name: "Schwimmen im Freibad",
                wetter: ["Sonnig"],
                temperatur: { min: 20, max: 40 }
            },
            {
                name: "Grillen mit Freunden",
                wetter: ["Sonnig"],
                temperatur: { min: 18, max: 35 }
            },
            {
                name: "Strandtag am See",
                wetter: ["Sonnig"],
                temperatur: { min: 20, max: 40 }
            },
            {
                name: "Open-Air-Konzert besuchen",
                wetter: ["Sonnig", "Bewölkt"],
                temperatur: { min: 15, max: 35 }
            },

            // Winter/kaltes Wetter
            {
                name: "Schlittschuhlaufen",
                wetter: ["Sonnig", "Bewölkt", "Schnee"],
                temperatur: { min: -15, max: 5 }
            },
            {
                name: "Schlitten fahren",
                wetter: ["Schnee"],
                temperatur: { min: -15, max: 0 }
            },
            {
                name: "Ski fahren oder Snowboarden",
                wetter: ["Sonnig", "Bewölkt", "Schnee"],
                temperatur: { min: -20, max: 5 }
            },
            {
                name: "Weihnachtsmarkt besuchen",
                wetter: ["Sonnig", "Bewölkt"],
                temperatur: { min: -5, max: 10 }
            },

            // Regenwetter indoor
            {
                name: "Brettspiele zuhause",
                wetter: ["Sonnig", "Bewölkt", "Nebel", "Regen", "Schnee", "Gewitter"],
                temperatur: { min: -20, max: 40 }
            },
            {
                name: "Ins Kino gehen",
                wetter: ["Sonnig", "Bewölkt", "Nebel", "Regen", "Schnee", "Gewitter"],
                temperatur: { min: -20, max: 40 }
            },
            {
                name: "Ein gutes Buch lesen",
                wetter: ["Sonnig", "Bewölkt", "Nebel", "Regen", "Schnee", "Gewitter"],
                temperatur: { min: -20, max: 40 }
            },
            {
                name: "Kochen oder Backen",
                wetter: ["Sonnig", "Bewölkt", "Nebel", "Regen", "Schnee", "Gewitter"],
                temperatur: { min: -20, max: 40 }
            },
            {
                name: "Museumsbesuch",
                wetter: ["Sonnig", "Bewölkt", "Nebel", "Regen", "Schnee", "Gewitter"],
                temperatur: { min: -20, max: 40 }
            },

            // Universell
            {
                name: "Yoga oder Meditation",
                wetter: ["Sonnig", "Bewölkt", "Nebel", "Regen", "Schnee", "Gewitter"],
                temperatur: { min: -20, max: 40 }
            },
            {
                name: "Fitnessstudio",
                wetter: ["Sonnig", "Bewölkt", "Nebel", "Regen", "Schnee", "Gewitter"],
                temperatur: { min: -20, max: 40 }
            },
            {
                name: "Freunde treffen im Café",
                wetter: ["Sonnig", "Bewölkt", "Nebel", "Regen", "Schnee", "Gewitter"],
                temperatur: { min: -20, max: 40 }
            },
            {
                name: "Kreativ sein (Malen, Musik, Schreiben)",
                wetter: ["Sonnig", "Bewölkt", "Nebel", "Regen", "Schnee", "Gewitter"],
                temperatur: { min: -20, max: 40 }
            }];
    }

    findeAktivitaet(wetter, grad) {
        const wetterDeutsch = getWetterZustandFromString(wetter);
        console.log("Condition Deutsch: " + wetterDeutsch);

        const passende = this.liste.filter(a => {
            const matchWetter = a.wetter.includes(wetterDeutsch);
            const matchTemp = grad >= a.temperatur.min && grad <= a.temperatur.max;
            return matchWetter && matchTemp;
        });

        console.log("Gefundene passende Aktivitäten:", passende);

        // Wenn keine gefunden, null zurückgeben
        if (passende.length === 0) return null;

        // Zufällige Auswahl
        const randomIndex = Math.floor(Math.random() * passende.length);
        console.log("Random Auswahl:", passende[randomIndex]);
        return passende[randomIndex];
    }
}

export default new Aktivitaeten();