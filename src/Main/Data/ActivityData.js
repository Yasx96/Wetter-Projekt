// aktivitaeten.js

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
            }
        ];
    }

    // Alle passenden Aktivitäten finden
    findeAktivitaet(wetter, grad) {
        return this.liste.filter(a =>
            a.wetter.includes(wetter) &&
            grad >= a.temperatur.min &&
            grad <= a.temperatur.max
        );
    }
}

// eslint-disable-next-line no-undef
module.exports = Aktivitaeten;
