import { getWetterZustandFromString } from "./WeatherDataMapping.js";

class Aktivitaeten {
    constructor() {
        this.liste = [
            // Draußen, flexibel
            {
                name: "Spaziergang im Park oder Wald",
                wetter: ["Sonnig", "Bewölkt"],
                temperatur: { min: -10, max: 40 },
                beschreibung: "Genieße die frische Luft und die Natur bei einem Spaziergang durch Park oder Wald. Körper und Seele werden belebt.",
                beschreibungPerfekt: "Perfekt für entspannte Stunden in der Natur, um frische Luft zu tanken und den Kopf frei zu bekommen."
            },
            {
                name: "Picknick im Grünen",
                wetter: ["Sonnig"],
                temperatur: { min: 15, max: 35 },
                beschreibung: "Pack eine Decke und Leckereien ein und verbringe Zeit draußen im Grünen. Sonne, gute Laune und Genuss erwarten dich.",
                beschreibungPerfekt: "Perfekt für gesellige Treffen an sonnigen Nachmittagen im Freien."
            },
            {
                name: "Joggen gehen",
                wetter: ["Sonnig", "Bewölkt"],
                temperatur: { min: 0, max: 25 },
                beschreibung: "Spüre die Energie beim Laufen an der frischen Luft. Bewegung tut Körper und Geist gut.",
                beschreibungPerfekt: "Perfekt für sportliche Aktivitäten, um Energie zu tanken und den Kreislauf anzuregen."
            },
            {
                name: "Radtour machen",
                wetter: ["Sonnig", "Bewölkt"],
                temperatur: { min: 5, max: 30 },
                beschreibung: "Erkunde die Umgebung mit dem Fahrrad. Frische Luft und Bewegung sorgen für Freude und Fitness.",
                beschreibungPerfekt: "Perfekt für Ausflüge an der frischen Luft und sportliche Abenteuer."
            },
            {
                name: "Wandern in den Bergen",
                wetter: ["Sonnig", "Bewölkt"],
                temperatur: { min: -5, max: 25 },
                beschreibung: "Erlebe die Aussicht beim Wandern und atme die frische Bergluft ein. Natur und Bewegung in einem.",
                beschreibungPerfekt: "Perfekt für Natur- und Bergliebhaber, die Aussicht und Bewegung kombinieren möchten."
            },
            {
                name: "Fotosafari in der Stadt",
                wetter: ["Sonnig", "Bewölkt"],
                temperatur: { min: 0, max: 30 },
                beschreibung: "Entdecke spannende Motive in der Stadt und halte sie fotografisch fest. Kreativität und Entdeckung kombiniert.",
                beschreibungPerfekt: "Perfekt für kreative Stunden und fotografische Entdeckungen im urbanen Raum."
            },

            // Sommer-Outdoor
            {
                name: "Schwimmen im Freibad",
                wetter: ["Sonnig"],
                temperatur: { min: 20, max: 40 },
                beschreibung: "Tauche ins kühle Wasser ein und genieße die Sonne. Spaß, Bewegung und Erfrischung sind garantiert.",
                beschreibungPerfekt: "Perfekt für Abkühlung und sportliche Aktivitäten an warmen Tagen."
            },
            {
                name: "Grillen mit Freunden",
                wetter: ["Sonnig"],
                temperatur: { min: 18, max: 35 },
                beschreibung: "Gemeinsames Essen im Freien mit Freunden sorgt für Freude und gute Laune.",
                beschreibungPerfekt: "Perfekt für gesellige Treffen im Freien und gemeinsames Genießen von Essen."
            },
            {
                name: "Strandtag am See",
                wetter: ["Sonnig"],
                temperatur: { min: 20, max: 40 },
                beschreibung: "Sonnen, schwimmen und entspannen. Ein Tag am See bietet Erholung und Spaß.",
                beschreibungPerfekt: "Perfekt für Entspannung, Sonnenbäder und erfrischendes Schwimmen an sonnigen Tagen."
            },
            {
                name: "Open-Air-Konzert besuchen",
                wetter: ["Sonnig", "Bewölkt"],
                temperatur: { min: 15, max: 35 },
                beschreibung: "Musik unter freiem Himmel genießen und vom Rhythmus mitreißen lassen.",
                beschreibungPerfekt: "Perfekt für Musik- und Kulturinteressierte, die draußen unterhalten werden möchten."
            },

            // Winter/kaltes Wetter
            {
                name: "Schlittschuhlaufen",
                wetter: ["Sonnig", "Bewölkt", "Schnee"],
                temperatur: { min: -15, max: 5 },
                beschreibung: "Gleite über das Eis und genieße die winterliche Atmosphäre.",
                beschreibungPerfekt: "Perfekt für Bewegung im Winter und gesellige Stunden auf dem Eis."
            },
            {
                name: "Schlitten fahren",
                wetter: ["Schnee"],
                temperatur: { min: -15, max: 0 },
                beschreibung: "Rase fröhlich die Hänge hinunter und spüre den Winterspaß.",
                beschreibungPerfekt: "Perfekt für actionreiche Winteraktivitäten im Schnee."
            },
            {
                name: "Ski fahren oder Snowboarden",
                wetter: ["Sonnig", "Bewölkt", "Schnee"],
                temperatur: { min: -20, max: 5 },
                beschreibung: "Frischer Schnee und rasante Abfahrten warten auf Wintersportbegeisterte.",
                beschreibungPerfekt: "Perfekt für Wintersport und Bewegung im Schnee."
            },
            {
                name: "Weihnachtsmarkt besuchen",
                wetter: ["Sonnig", "Bewölkt"],
                temperatur: { min: -5, max: 10 },
                beschreibung: "Festliche Stimmung, Lichter und Glühwein genießen.",
                beschreibungPerfekt: "Perfekt für winterliche Märkte und festliche Atmosphäre."
            },

            // Regenwetter indoor
            {
                name: "Brettspiele zuhause",
                wetter: ["Sonnig", "Bewölkt", "Nebel", "Regen", "Schnee", "Gewitter"],
                temperatur: { min: -20, max: 40 },
                beschreibung: "Gemütliche Stunden mit Familie oder Freunden beim Spielen verbringen. Spaß und Unterhaltung inklusive.",
                beschreibungPerfekt: "Perfekt für Indoor-Aktivitäten bei jedem Wetter mit Familie oder Freunden."
            },
            {
                name: "Ins Kino gehen",
                wetter: ["Sonnig", "Bewölkt", "Nebel", "Regen", "Schnee", "Gewitter"],
                temperatur: { min: -20, max: 40 },
                beschreibung: "Das Wetter draußen passt nicht? Genieße einen spannenden Film im Kino.",
                beschreibungPerfekt: "Perfekt für Unterhaltung bei kühlem oder regnerischem Wetter."
            },
            {
                name: "Ein gutes Buch lesen",
                wetter: ["Sonnig", "Bewölkt", "Nebel", "Regen", "Schnee", "Gewitter"],
                temperatur: { min: -20, max: 40 },
                beschreibung: "Lass dich in eine andere Welt entführen und entspanne dich beim Lesen.",
                beschreibungPerfekt: "Perfekt für ruhige Momente und Entspannung."
            },
            {
                name: "Kochen oder Backen",
                wetter: ["Sonnig", "Bewölkt", "Nebel", "Regen", "Schnee", "Gewitter"],
                temperatur: { min: -20, max: 40 },
                beschreibung: "Kreiere leckere Gerichte oder süße Köstlichkeiten. Spaß und Genuss inklusive!",
                beschreibungPerfekt: "Perfekt für kreative Küchenaktivitäten."
            },
            {
                name: "Museumsbesuch",
                wetter: ["Sonnig", "Bewölkt", "Nebel", "Regen", "Schnee", "Gewitter"],
                temperatur: { min: -20, max: 40 },
                beschreibung: "Tauche ein in Kunst und Geschichte. Inspiration und Wissen inklusive.",
                beschreibungPerfekt: "Perfekt für kulturinteressierte Stunden in Museen."
            },

            // Universell
            {
                name: "Yoga oder Meditation",
                wetter: ["Sonnig", "Bewölkt", "Nebel", "Regen", "Schnee", "Gewitter"],
                temperatur: { min: -20, max: 40 },
                beschreibung: "Finde Ruhe und Entspannung. Yoga oder Meditation bringt Körper und Geist in Einklang.",
                beschreibungPerfekt: "Perfekt für Momente der Ruhe und inneren Ausgeglichenheit."
            },
            {
                name: "Fitnessstudio",
                wetter: ["Sonnig", "Bewölkt", "Nebel", "Regen", "Schnee", "Gewitter"],
                temperatur: { min: -20, max: 40 },
                beschreibung: "Nutze den Tag für Training und tu deinem Körper etwas Gutes im Fitnessstudio.",
                beschreibungPerfekt: "Perfekt für sportliche Betätigung und Fitnessaufbau."
            },
            {
                name: "Freunde treffen im Café",
                wetter: ["Sonnig", "Bewölkt", "Nebel", "Regen", "Schnee", "Gewitter"],
                temperatur: { min: -20, max: 40 },
                beschreibung: "Gemütliche Stunden bei Kaffee oder Tee mit Freunden verbringen. Gespräche und Lachen inklusive.",
                beschreibungPerfekt: "Perfekt für entspannte Treffen mit Freunden."
            },
            {
                name: "Kreativ sein (Malen, Musik, Schreiben)",
                wetter: ["Sonnig", "Bewölkt", "Nebel", "Regen", "Schnee", "Gewitter"],
                temperatur: { min: -20, max: 40 },
                beschreibung: "Lass der Kreativität freien Lauf, male, schreibe oder musiziere. Spaß und Inspiration garantiert.",
                beschreibungPerfekt: "Perfekt für kreative Entfaltung und künstlerische Beschäftigung."
            }
        ];
    }

    findeAktivitaet(wetter, grad) {
        const wetterDeutsch = getWetterZustandFromString(wetter);
        const passende = this.liste.filter(a => {
            const matchWetter = a.wetter.includes(wetterDeutsch);
            const matchTemp = grad >= a.temperatur.min && grad <= a.temperatur.max;
            return matchWetter && matchTemp;
        });

        if (passende.length === 0) return null;

        const randomIndex = Math.floor(Math.random() * passende.length);
        return passende[randomIndex];
    }
}

export default new Aktivitaeten();
