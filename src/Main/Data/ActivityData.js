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
                beschreibungPerfekt: "Perfekt für entspannte Stunden in der Natur, um frische Luft zu tanken und den Kopf frei zu bekommen.",
                bildUrl: "https://cdn.pixabay.com/photo/2015/03/08/23/29/walk-664898_960_720.jpg"
            },
            {
                name: "Picknick im Grünen",
                wetter: ["Sonnig"],
                temperatur: { min: 15, max: 35 },
                beschreibung: "Pack eine Decke und Leckereien ein und verbringe Zeit draußen im Grünen. Sonne, gute Laune und Genuss erwarten dich.",
                beschreibungPerfekt: "Perfekt für gesellige Treffen an sonnigen Nachmittagen im Freien.",
                bildUrl: "https://cdn.pixabay.com/photo/2022/12/09/02/13/picnic-7644385_960_720.jpg"
            },
            {
                name: "Joggen gehen",
                wetter: ["Sonnig", "Bewölkt"],
                temperatur: { min: 0, max: 25 },
                beschreibung: "Spüre die Energie beim Laufen an der frischen Luft. Bewegung tut Körper und Geist gut.",
                beschreibungPerfekt: "Perfekt für sportliche Aktivitäten, um Energie zu tanken und den Kreislauf anzuregen.",
                bildUrl: "https://cdn.pixabay.com/photo/2016/11/14/03/06/woman-1822459_960_720.jpg"
            },
            {
                name: "Radtour machen",
                wetter: ["Sonnig", "Bewölkt"],
                temperatur: { min: 5, max: 30 },
                beschreibung: "Erkunde die Umgebung mit dem Fahrrad. Frische Luft und Bewegung sorgen für Freude und Fitness.",
                beschreibungPerfekt: "Perfekt für Ausflüge an der frischen Luft und sportliche Abenteuer.",
                bildUrl: "https://cdn.pixabay.com/photo/2017/07/01/20/11/summer-2462535_960_720.jpg"
            },
            {
                name: "Fotosafari in der Stadt",
                wetter: ["Sonnig", "Bewölkt"],
                temperatur: { min: 0, max: 30 },
                beschreibung: "Entdecke spannende Motive in der Stadt und halte sie fotografisch fest. Kreativität und Entdeckung kombiniert.",
                beschreibungPerfekt: "Perfekt für kreative Stunden und fotografische Entdeckungen im urbanen Raum.",
                bildUrl: "https://cdn.pixabay.com/photo/2014/07/31/22/50/photographer-407068_960_720.jpg"
            },

            // Sommer-Outdoor
            {
                name: "Schwimmen im Freibad",
                wetter: ["Sonnig"],
                temperatur: { min: 20, max: 40 },
                beschreibung: "Tauche ins kühle Wasser ein und genieße die Sonne. Spaß, Bewegung und Erfrischung sind garantiert.",
                beschreibungPerfekt: "Perfekt für Abkühlung und sportliche Aktivitäten an warmen Tagen.",
                bildUrl: "https://cdn.pixabay.com/photo/2019/11/30/12/08/outdoor-pool-4663122_960_720.jpg"
            },
            {
                name: "Grillen mit Freunden",
                wetter: ["Sonnig"],
                temperatur: { min: 18, max: 35 },
                beschreibung: "Gemeinsames Essen im Freien mit Freunden sorgt für Freude und gute Laune.",
                beschreibungPerfekt: "Perfekt für gesellige Treffen im Freien und gemeinsames Genießen von Essen.",
                bildUrl: "https://cdn.pixabay.com/photo/2017/06/09/10/25/barbecue-2386450_960_720.jpg"
            },
            {
                name: "Strandtag am See",
                wetter: ["Sonnig"],
                temperatur: { min: 20, max: 40 },
                beschreibung: "Sonnen, schwimmen und entspannen. Ein Tag am See bietet Erholung und Spaß.",
                beschreibungPerfekt: "Perfekt für Entspannung, Sonnenbäder und erfrischendes Schwimmen an sonnigen Tagen.",
                bildUrl: "https://cdn.pixabay.com/photo/2020/05/26/16/19/badesee-5223706_960_720.jpg"
            },
            {
                name: "Open-Air-Konzert besuchen",
                wetter: ["Sonnig", "Bewölkt"],
                temperatur: { min: 15, max: 35 },
                beschreibung: "Musik unter freiem Himmel genießen und vom Rhythmus mitreißen lassen.",
                beschreibungPerfekt: "Perfekt für Musik- und Kulturinteressierte, die draußen unterhalten werden möchten.",
                bildUrl: "https://cdn.pixabay.com/photo/2013/06/10/15/09/concert-125498_960_720.jpg"
            },

            // Winter/kaltes Wetter
            {
                name: "Schlittschuhlaufen",
                wetter: ["Sonnig", "Bewölkt", "Schnee"],
                temperatur: { min: -15, max: 5 },
                beschreibung: "Gleite über das Eis und genieße die winterliche Atmosphäre.",
                beschreibungPerfekt: "Perfekt für Bewegung im Winter und gesellige Stunden auf dem Eis.",
                bildUrl: "https://cdn.pixabay.com/photo/2013/12/30/00/20/ice-skating-235547_960_720.jpg"
            },
            {
                name: "Schlitten fahren",
                wetter: ["Schnee"],
                temperatur: { min: -15, max: 0 },
                beschreibung: "Rase fröhlich die Hänge hinunter und spüre den Winterspaß.",
                beschreibungPerfekt: "Perfekt für actionreiche Winteraktivitäten im Schnee.",
                bildUrl: "https://cdn.pixabay.com/photo/2017/10/12/21/24/winter-2846027_960_720.jpg"
            },
            {
                name: "Weihnachtsmarkt besuchen",
                wetter: ["Sonnig", "Bewölkt"],
                temperatur: { min: -5, max: 10 },
                beschreibung: "Festliche Stimmung, Lichter und Glühwein genießen.",
                beschreibungPerfekt: "Perfekt für winterliche Märkte und festliche Atmosphäre.",
                bildUrl: "https://cdn.pixabay.com/photo/2018/12/13/14/24/the-kremlin-3872941_960_720.jpg"
            },

            // Regenwetter indoor
            {
                name: "Brettspiele zuhause",
                wetter: ["Sonnig", "Bewölkt", "Nebel", "Regen", "Schnee", "Gewitter"],
                temperatur: { min: -20, max: 40 },
                beschreibung: "Gemütliche Stunden mit Familie oder Freunden beim Spielen verbringen. Spaß und Unterhaltung inklusive.",
                beschreibungPerfekt: "Perfekt für Indoor-Aktivitäten bei jedem Wetter mit Familie oder Freunden.",
                bildUrl: "https://cdn.pixabay.com/photo/2023/01/07/05/30/ludo-7702631_960_720.jpg"
            },
            {
                name: "Ins Kino gehen",
                wetter: ["Sonnig", "Bewölkt", "Nebel", "Regen", "Schnee", "Gewitter"],
                temperatur: { min: -20, max: 40 },
                beschreibung: "Das Wetter draußen passt nicht? Genieße einen spannenden Film im Kino.",
                beschreibungPerfekt: "Perfekt für Unterhaltung bei kühlem oder regnerischem Wetter.",
                bildUrl: "https://cdn.pixabay.com/photo/2017/02/23/21/35/cinema-2093264_960_720.jpg"
            },
            {
                name: "Ein gutes Buch lesen",
                wetter: ["Sonnig", "Bewölkt", "Nebel", "Regen", "Schnee", "Gewitter"],
                temperatur: { min: -20, max: 40 },
                beschreibung: "Lass dich in eine andere Welt entführen und entspanne dich beim Lesen.",
                beschreibungPerfekt: "Perfekt für ruhige Momente und Entspannung.",
                bildUrl: "https://cdn.pixabay.com/photo/2023/02/22/19/13/reading-7807231_960_720.jpg"
            },
            {
                name: "Kochen oder Backen",
                wetter: ["Sonnig", "Bewölkt", "Nebel", "Regen", "Schnee", "Gewitter"],
                temperatur: { min: -20, max: 40 },
                beschreibung: "Kreiere leckere Gerichte oder süße Köstlichkeiten. Spaß und Genuss inklusive!",
                beschreibungPerfekt: "Perfekt für kreative Küchenaktivitäten.",
                bildUrl: "https://cdn.pixabay.com/photo/2021/09/20/06/55/spaghetti-6639970_960_720.jpg"
            },
            {
                name: "Museumsbesuch",
                wetter: ["Sonnig", "Bewölkt", "Nebel", "Regen", "Schnee", "Gewitter"],
                temperatur: { min: -20, max: 40 },
                beschreibung: "Tauche ein in Kunst und Geschichte. Inspiration und Wissen inklusive.",
                beschreibungPerfekt: "Perfekt für kulturinteressierte Stunden in Museen.",
                bildUrl: "https://cdn.pixabay.com/photo/2019/07/03/09/41/national-history-museum-4314035_960_720.jpg"
            },

            // Universell
            {
                name: "Yoga oder Meditation",
                wetter: ["Sonnig", "Bewölkt", "Nebel", "Regen", "Schnee", "Gewitter"],
                temperatur: { min: -20, max: 40 },
                beschreibung: "Finde Ruhe und Entspannung. Yoga oder Meditation bringt Körper und Geist in Einklang.",
                beschreibungPerfekt: "Perfekt für Momente der Ruhe und inneren Ausgeglichenheit.",
                bildUrl: "https://cdn.pixabay.com/photo/2017/11/18/05/02/yoga-2959226_960_720.jpg"
            },
            {
                name: "Fitnessstudio",
                wetter: ["Sonnig", "Bewölkt", "Nebel", "Regen", "Schnee", "Gewitter"],
                temperatur: { min: -20, max: 40 },
                beschreibung: "Nutze den Tag für Training und tu deinem Körper etwas Gutes im Fitnessstudio.",
                beschreibungPerfekt: "Perfekt für sportliche Betätigung und Fitnessaufbau.",
                bildUrl: "https://cdn.pixabay.com/photo/2024/11/07/11/58/fitness-9180669_960_720.jpg"
            },
            {
                name: "Freunde treffen im Café",
                wetter: ["Sonnig", "Bewölkt", "Nebel", "Regen", "Schnee", "Gewitter"],
                temperatur: { min: -20, max: 40 },
                beschreibung: "Gemütliche Stunden bei Kaffee oder Tee mit Freunden verbringen. Gespräche und Lachen inklusive.",
                beschreibungPerfekt: "Perfekt für entspannte Treffen mit Freunden.",
                bildUrl: "https://cdn.pixabay.com/photo/2017/10/17/21/15/pair-2862155_960_720.jpg"
            },
            {
                name: "Kreativ sein (Malen, Musik, Schreiben)",
                wetter: ["Sonnig", "Bewölkt", "Nebel", "Regen", "Schnee", "Gewitter"],
                temperatur: { min: -20, max: 40 },
                beschreibung: "Lass der Kreativität freien Lauf, male, schreibe oder musiziere. Spaß und Inspiration garantiert.",
                beschreibungPerfekt: "Perfekt für kreative Entfaltung und künstlerische Beschäftigung.",
                bildUrl: "https://cdn.pixabay.com/photo/2019/02/15/12/42/origami-3998383_960_720.jpg"
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
