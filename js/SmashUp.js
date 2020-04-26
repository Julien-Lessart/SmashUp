/*
    Générateur de decks SmashUp pour x joueurs
    Site Web
    Julien LESSART
    Version 1.0
    16/03/20
*/


// Déclarations des variables et constante
const NBFACTIONS = 74; // Nb de factions dans le jeu
let nbJoueurs = $("#nbJoueurs").data("value"); // Pour le nombre de joueurs
let arrayFactions = []; // Tableau contenant les factions
let verif = false; // Pour verifier si des decks ont déjà était charger 


$(document).ready(function() { // Pour charger le Jquery au chargement de la page


    $("#btnGen").on("click", function() {
        // Quand on clique sur le bouton
        // Aucun prm
        // Aucun valeur de retour

        // Pour recharger la page
        if (verif === false) {
            nbDeJoueurs();
            Melanger();
            verif = true;
        } else {
            location.reload();
        }

    });
});


function nbDeJoueurs() {
    // On cree le nombre de joueurs et le tableau de factions
    // Aucun prm
    // Aucune valeur de retour

    // Pour le nombre de joueur
    nbJoueurs = parseInt($("#nbJoueurs").val());

    // Pour stocker les informations des cases
    arrayFactions.push({ img: "imgAliens", selec: 0, nom: "Aliens", id: 0 });
    arrayFactions.push({ img: "imgDinosaurs", selec: 0, nom: "Dinosaurs", id: 1 });
    arrayFactions.push({ img: "imgNinjas", selec: 0, nom: "Ninjas", id: 2 });
    arrayFactions.push({ img: "imgPirates", selec: 0, nom: "Pirates", id: 3 });
    arrayFactions.push({ img: "imgRobots", selec: 0, nom: "Robots", id: 4 });
    arrayFactions.push({ img: "imgTricksters", selec: 0, nom: "Tricksters", id: 5 });
    arrayFactions.push({ img: "imgWizards", selec: 0, nom: "Wizards", id: 6 });
    arrayFactions.push({ img: "imgZombies", selec: 0, nom: "Zombies", id: 7 });
    arrayFactions.push({ img: "imgBearCavalry", selec: 0, nom: "Bear Cavalry", id: 8 });
    arrayFactions.push({ img: "imgGhost", selec: 0, nom: "Ghosts", id: 9 });
    arrayFactions.push({ img: "imgKillerPlants", selec: 0, nom: "Killer Plants", id: 10 });
    arrayFactions.push({ img: "imgSteampunks", selec: 0, nom: "Steampunks", id: 11 });
    arrayFactions.push({ img: "imgElderThings", selec: 0, nom: "Elder Things", id: 12 });
    arrayFactions.push({ img: "imgInnsmouth", selec: 0, nom: "Innsmouth", id: 13 });
    arrayFactions.push({ img: "imgMinionsOfCthulhu", selec: 0, nom: "Minions of Cthulhu", id: 14 });
    arrayFactions.push({ img: "imgMiskatonicUniversity", selec: 0, nom: "Miskatonic University", id: 15 });
    arrayFactions.push({ img: "imgCyborgApes", selec: 0, nom: "Cyborg Apes", id: 16 });
    arrayFactions.push({ img: "imgShapeshifters", selec: 0, nom: "Shapeshifters", id: 17 });
    arrayFactions.push({ img: "imgSuperSpies", selec: 0, nom: "Super Spies", id: 18 });
    arrayFactions.push({ img: "imgTimeTravelers", selec: 0, nom: "Time Travelers", id: 19 });
    arrayFactions.push({ img: "imgGiantAnts", selec: 0, nom: "Giant Ants", id: 20 });
    arrayFactions.push({ img: "imgMadScientists", selec: 0, nom: "Mad Scientists", id: 21 });
    arrayFactions.push({ img: "imgVampires", selec: 0, nom: "Vampires", id: 22 });
    arrayFactions.push({ img: "imgWerewolves", selec: 0, nom: "Werewolves", id: 23 });
    arrayFactions.push({ img: "imgFairies", selec: 0, nom: "Fairies", id: 24 });
    arrayFactions.push({ img: "imgKittyCats", selec: 0, nom: "Kitty Cats", id: 25 });
    arrayFactions.push({ img: "imgMythicHorses", selec: 0, nom: "Mythic Horses", id: 26 });
    arrayFactions.push({ img: "imgPrincesses", selec: 0, nom: "Princesses", id: 27 });
    arrayFactions.push({ img: "imgClerics", selec: 0, nom: "Clerics", id: 28 });
    arrayFactions.push({ img: "imgDwarves", selec: 0, nom: "Dwarves", id: 29 });
    arrayFactions.push({ img: "imgElves", selec: 0, nom: "Elves", id: 30 });
    arrayFactions.push({ img: "imgHalflings", selec: 0, nom: "Halflings", id: 31 });
    arrayFactions.push({ img: "imgMages", selec: 0, nom: "Mages", id: 32 });
    arrayFactions.push({ img: "imgOrcs", selec: 0, nom: "Orcs", id: 33 });
    arrayFactions.push({ img: "imgThieves", selec: 0, nom: "Thieves", id: 34 });
    arrayFactions.push({ img: "imgWarriors", selec: 0, nom: "Warriors", id: 35 });
    arrayFactions.push({ img: "imgDragons", selec: 0, nom: "Dragons", id: 36 });
    arrayFactions.push({ img: "imgMythicGreeks", selec: 0, nom: "Mythic Greeks", id: 37 });
    arrayFactions.push({ img: "imgSharks", selec: 0, nom: "Sharks", id: 38 });
    arrayFactions.push({ img: "imgSuperheroes", selec: 0, nom: "Superheroes", id: 39 });
    arrayFactions.push({ img: "imgTornados", selec: 0, nom: "Tornados", id: 40 });
    arrayFactions.push({ img: "imgAstroknights", selec: 0, nom: "Astroknights", id: 41 });
    arrayFactions.push({ img: "imgChangerbots", selec: 0, nom: "Changerbots", id: 42 });
    arrayFactions.push({ img: "imgIgnobles", selec: 0, nom: "Ignobles", id: 43 });
    arrayFactions.push({ img: "imgStarRoamers", selec: 0, nom: "Star Roamers", id: 44 });
    arrayFactions.push({ img: "imgExplorers", selec: 0, nom: "Explorers", id: 45 });
    arrayFactions.push({ img: "imgGrannies", selec: 0, nom: "Grannies", id: 46 });
    arrayFactions.push({ img: "imgRockStars", selec: 0, nom: "Rock Stars", id: 47 });
    arrayFactions.push({ img: "imgTeddyBears", selec: 0, nom: "Teddy Bears", id: 48 });
    arrayFactions.push({ img: "imgIttyCritters", selec: 0, nom: "Itty Critters", id: 49 });
    arrayFactions.push({ img: "imgKaiju", selec: 0, nom: "Kaiju", id: 50 });
    arrayFactions.push({ img: "imgMagicalGirls", selec: 0, nom: "Magical Girls", id: 51 });
    arrayFactions.push({ img: "imgMegaTroopers", selec: 0, nom: "Mega Troopers", id: 52 });
    arrayFactions.push({ img: "imgSheep", selec: 0, nom: "Sheep", id: 53 });
    arrayFactions.push({ img: "imgDiscoDancers", selec: 0, nom: "Disco Dancers", id: 54 });
    arrayFactions.push({ img: "imgStarKungFuFighters", selec: 0, nom: "Star Kung Fu Fighters", id: 55 });
    arrayFactions.push({ img: "imgTruckers", selec: 0, nom: "Truckers", id: 56 });
    arrayFactions.push({ img: "imgVigilantes", selec: 0, nom: "Vigilantes", id: 57 });
    arrayFactions.push({ img: "imgGeeks", selec: 0, nom: "Geeks", id: 58 });
    arrayFactions.push({ img: "imgSmashUpAllStars", selec: 0, nom: "Smash Up All Stars", id: 59 });
    arrayFactions.push({ img: "imgAncientEgyptians", selec: 0, nom: "Ancient Egyptians", id: 60 });
    arrayFactions.push({ img: "imgCowboys", selec: 0, nom: "Cowboys", id: 61 });
    arrayFactions.push({ img: "imgSamurai", selec: 0, nom: "Samurai", id: 62 });
    arrayFactions.push({ img: "imgVikings", selec: 0, nom: "Vikings", id: 63 });
    arrayFactions.push({ img: "imgLuchadors", selec: 0, nom: "Luchadors", id: 64 });
    arrayFactions.push({ img: "imgMounties", selec: 0, nom: "Mounties", id: 65 });
    arrayFactions.push({ img: "imgMusketeers", selec: 0, nom: "Musketeers", id: 66 });
    arrayFactions.push({ img: "imgSumoWrestlerskers", selec: 0, nom: "Sumo Wrestlerskers", id: 67 });
    arrayFactions.push({ img: "imgPenguins", selec: 0, nom: "Penguins", id: 68 });
    arrayFactions.push({ img: "imgAnansiTales", selec: 0, nom: "Anansi Tales", id: 69 });
    arrayFactions.push({ img: "imgAncientIncas", selec: 0, nom: "Ancient Incas", id: 70 });
    arrayFactions.push({ img: "imgGrimmsFairyTales", selec: 0, nom: "Grimms’ Fairy Tales", id: 71 });
    arrayFactions.push({ img: "imgPolynesianVoyagers", selec: 0, nom: "Polynesian Voyagers", id: 72 });
    arrayFactions.push({ img: "imgRussianFairyTales", selec: 0, nom: "Russian Fairy Tales", id: 73 });
}

function Melanger() {
    // Permet de  choisir un nombre random et de créer son deck avec
    // Aucun prm
    // Aucune valeur de retour

    let random = getRandomInt(NBFACTIONS);
    for (let i = 1; i <= nbJoueurs; i++) {
        creerTableau(i);
        while (arrayFactions[random].selec !== 0) {
            random = getRandomInt(NBFACTIONS);
        }
        if (arrayFactions[random].selec === 0) {
            arrayFactions[random].selec = 1;
            $("#NomFactions" + i.toString() + "1").html(arrayFactions[random].nom);
            $("#ImgFactions" + i.toString() + "1").addClass(arrayFactions[random].img);
        }
        random = getRandomInt(NBFACTIONS);
        while (arrayFactions[random].selec !== 0) {
            random = getRandomInt(NBFACTIONS);
        }
        if (arrayFactions[random].selec === 0) {
            arrayFactions[random].selec = 1;
            $("#NomFactions" + i.toString() + "2").html(arrayFactions[random].nom);
            $("#ImgFactions" + i.toString() + "2").addClass(arrayFactions[random].img);
        }

    }
}

function creerTableau(prmI) {
    // Permet de creer les tableaux pour les decks
    // Un prm : prmI valeur de i dans Melanger
    // Aucune valeur de retour

    $("#conteneur").append('<table id = "TableauJ' + prmI + '" ></table>'); // Pour ajouter un tableau par joueur

    //$("#TableauJ" + prmI).append("<tr> <td>" + nomFactions1 + "</td> <td>" + nomFactions2 + "</td> </tr>");
    $("#TableauJ" + prmI).append('<tr> <td id = "NomFactions' + prmI + '1" ></td> <td id = "NomFactions' + prmI + '2"></td> </tr>');
    $("#TableauJ" + prmI).append('<tr> <td id = "ImgFactions' + prmI + '1" ></td> <td id = "ImgFactions' + prmI + '2"></td> </tr>');
}

function getRandomInt(max) {
    // Renvoie un entier random entre 0 et le prm - 1
    // Un prm : max entier a randomizer
    // Une valeur de retour : La partie entière de random * la partie entière du prm
    return Math.floor(Math.random() * Math.floor(max));
}