/*
    Générateur de decks SmashUp pour x joueurs
    Site Web
    Julien LESSART
    Version 1.0
    16/03/20
*/


// Déclarations des variables et constante
let nbFactions = 0; // Nb de factions dans le jeu
let nbJoueurs = $("#nbJoueurs").data("value"); // Pour le nombre de joueurs
let arrayFactions = []; // Tableau contenant les factions
let arraySelec = []; // Tableau contenant les factions déjà prise
let verif = false; // Pour verifier si des decks ont déjà était charger 


$(document).ready(function() { // Pour charger le Jquery au chargement de la page

    CheckList();
    $("#btnGen").on("click", function() {
        // Quand on clique sur le bouton
        // Aucun prm
        // Aucun valeur de retour

        // Pour recharger la page
        if (verif === false) {
            Reset();
            NbDeJoueurs();
            Melanger();
            verif = true;
        } else {
            Reset();
            NbDeJoueurs();
            Melanger();
            verif = false;
        }

    });

    $("#btnDecocher").on("click", function() {
        // Quand on clique sur le bouton
        // Aucun prm
        // Aucun valeur de retour

        ToutDecocher();


    });
});


function NbDeJoueurs() {
    // On cree le nombre de joueurs et le tableau de factions
    // Aucun prm
    // Aucune valeur de retour

    // Pour le nombre de joueur
    nbJoueurs = parseInt($("#nbJoueurs").val());

}

function Melanger() {
    // Permet de  choisir un nombre random et de créer son deck avec
    // Aucun prm
    // Aucune valeur de retour

    nbFactions = arrayFactions.length;
    let random = getRandomInt(nbFactions);
    for (let i = 1; i <= nbJoueurs; i++) {
        creerTableau(i);
        while (arrayFactions[random].selec !== 0) {
            random = getRandomInt(nbFactions);
        }
        if (arrayFactions[random].selec === 0) {
            arrayFactions[random].selec = 1;
            $("#NomFactions" + i.toString() + "1").html(arrayFactions[random].nom);
            $("#ImgFactions" + i.toString() + "1").addClass(arrayFactions[random].img);
            arraySelec.push(random);
        }

        random = getRandomInt(nbFactions);
        while (arrayFactions[random].selec !== 0) {
            random = getRandomInt(nbFactions);
        }
        if (arrayFactions[random].selec === 0) {
            arrayFactions[random].selec = 1;
            $("#NomFactions" + i.toString() + "2").html(arrayFactions[random].nom);
            $("#ImgFactions" + i.toString() + "2").addClass(arrayFactions[random].img);
            arraySelec.push(random);
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

function CheckList() {

    if ($(".cbAliens").is(":checked")) {
        arrayFactions.push({ img: "imgAliens", selec: 0, nom: "Aliens" });
    }

    if ($(".cbDinosaurs").is(":checked")) {
        arrayFactions.push({ img: "imgDinosaurs", selec: 0, nom: "Dinosaures" });
    }

    if ($(".cbNinjas").is(":checked")) {
        arrayFactions.push({ img: "imgNinjas", selec: 0, nom: "Ninjas" });
    }

    if ($(".cbPirates").is(":checked")) {
        arrayFactions.push({ img: "imgPirates", selec: 0, nom: "Pirates" });
    }

    if ($(".cbRobots").is(":checked")) {
        arrayFactions.push({ img: "imgRobots", selec: 0, nom: "Robots" });
    }

    if ($(".cbPetitPeuples").is(":checked")) {
        arrayFactions.push({ img: "imgTricksters", selec: 0, nom: "Petit Peuple" });
    }

    if ($(".cbMagiciens").is(":checked")) {
        arrayFactions.push({ img: "imgWizards", selec: 0, nom: "Magiciens" });
    }

    if ($(".cbZombies").is(":checked")) {
        arrayFactions.push({ img: "imgZombies", selec: 0, nom: "Zombies" });
    }

    if ($(".cbCavalerieOurs").is(":checked")) {
        arrayFactions.push({ img: "imgBearCavalry", selec: 0, nom: "Cavalerie ours" });
    }

    if ($(".cbFantomes").is(":checked")) {
        arrayFactions.push({ img: "imgGhost", selec: 0, nom: "Fantômes" });
    }

    if ($(".cbPlantesCarnivors").is(":checked")) {
        arrayFactions.push({ img: "imgKillerPlants", selec: 0, nom: "Plantes carnivores" });
    }

    if ($(".cbSteampunks").is(":checked")) {
        arrayFactions.push({ img: "imgSteampunks", selec: 0, nom: "Steampunks" });
    }

    if ($(".cbGrandsAnciens").is(":checked")) {
        arrayFactions.push({ img: "imgElderThings", selec: 0, nom: "Grands Anciens" });
    }

    if ($(".cbInnsmouth").is(":checked")) {
        arrayFactions.push({ img: "imgInnsmouth", selec: 0, nom: "Innsmouth" });
    }

    if ($(".cbServiteursDeCthulhu").is(":checked")) {
        arrayFactions.push({ img: "imgMinionsOfCthulhu", selec: 0, nom: "Serviteurs de Cthulhu" });
    }

    if ($(".cbUniversiteMiskatonic").is(":checked")) {
        arrayFactions.push({ img: "imgMiskatonicUniversity", selec: 0, nom: "Université Miskatonic" });
    }

    if ($(".cbSingesCyborgs").is(":checked")) {
        arrayFactions.push({ img: "imgCyborgApes", selec: 0, nom: "Singes cyborgs" });
    }

    if ($(".cbMetamorphes").is(":checked")) {
        arrayFactions.push({ img: "imgShapeshifters", selec: 0, nom: "Métamorphes" });
    }

    if ($(".cbSuperEspions").is(":checked")) {
        arrayFactions.push({ img: "imgSuperSpies", selec: 0, nom: "Super espions" });
    }

    if ($(".cbVoyageursDuTemps").is(":checked")) {
        arrayFactions.push({ img: "imgTimeTravelers", selec: 0, nom: "Voyageurs du temps" });
    }

    if ($(".cbFourmisGeantes").is(":checked")) {
        arrayFactions.push({ img: "imgGiantAnts", selec: 0, nom: "Fourmis géantes" });
    }

    if ($(".cbScientifiquesFous").is(":checked")) {
        arrayFactions.push({ img: "imgMadScientists", selec: 0, nom: "Scientifiques fous" });
    }

    if ($(".cbVampires").is(":checked")) {
        arrayFactions.push({ img: "imgVampires", selec: 0, nom: "Vampires" });
    }

    if ($(".cbLoupGarous").is(":checked")) {
        arrayFactions.push({ img: "imgWerewolves", selec: 0, nom: "Loup-garous" });
    }

    if ($(".cbFees").is(":checked")) {
        arrayFactions.push({ img: "imgFairies", selec: 0, nom: "Fées" });
    }

    if ($(".cbChatonsMignons").is(":checked")) {
        arrayFactions.push({ img: "imgKittyCats", selec: 0, nom: "Chatons mignons" });
    }

    if ($(".cbChevauxMythiques").is(":checked")) {
        arrayFactions.push({ img: "imgMythicHorses", selec: 0, nom: "Chevaux mythiques" });
    }

    if ($(".cbPrincesses").is(":checked")) {
        arrayFactions.push({ img: "imgPrincesses", selec: 0, nom: "Princesses" });
    }

    if ($(".cbPretres").is(":checked")) {
        arrayFactions.push({ img: "imgClerics", selec: 0, nom: "Prêtres" });
    }

    if ($(".cbNains").is(":checked")) {
        arrayFactions.push({ img: "imgDwarves", selec: 0, nom: "Nains" });
    }

    if ($(".cbElfes").is(":checked")) {
        arrayFactions.push({ img: "imgElves", selec: 0, nom: "Elfes" });
    }

    if ($(".cbHalfelins").is(":checked")) {
        arrayFactions.push({ img: "imgHalflings", selec: 0, nom: "Halfelins" });
    }

    if ($(".cbMages").is(":checked")) {
        arrayFactions.push({ img: "imgMages", selec: 0, nom: "Mages" });
    }

    if ($(".cbOrques").is(":checked")) {
        arrayFactions.push({ img: "imgOrcs", selec: 0, nom: "Orques" });
    }

    if ($(".cbVoleurs").is(":checked")) {
        arrayFactions.push({ img: "imgThieves", selec: 0, nom: "Voleurs" });
    }

    if ($(".cbGuerriers").is(":checked")) {
        arrayFactions.push({ img: "imgWarriors", selec: 0, nom: "Guerriers" });
    }

    if ($(".cbDragons").is(":checked")) {
        arrayFactions.push({ img: "imgDragons", selec: 0, nom: "Dragons" });
    }

    if ($(".cbMthologiesGrecques").is(":checked")) {
        arrayFactions.push({ img: "imgMythicGreeks", selec: 0, nom: "Mythologies Grecques" });
    }

    if ($(".cbRequins").is(":checked")) {
        arrayFactions.push({ img: "imgSharks", selec: 0, nom: "Requins" });
    }

    if ($(".cbSuperHeros").is(":checked")) {
        arrayFactions.push({ img: "imgSuperheroes", selec: 0, nom: "Super-Héros" });
    }

    if ($(".cbTornades").is(":checked")) {
        arrayFactions.push({ img: "imgTornados", selec: 0, nom: "Tornades" });
    }

    if ($(".cbChevaliersdesEtoiles").is(":checked")) {
        arrayFactions.push({ img: "imgAstroknights", selec: 0, nom: "Chevaliers des Etoiles" });
    }

    if ($(".cbChangeformers").is(":checked")) {
        arrayFactions.push({ img: "imgChangerbots", selec: 0, nom: "Changeformers" });
    }

    if ($(".cbSquatteursDeTrone").is(":checked")) {
        arrayFactions.push({ img: "imgIgnobles", selec: 0, nom: "Squatteurs de Trône" });
    }

    if ($(".cbVoyageursDeLespace").is(":checked")) {
        arrayFactions.push({ img: "imgStarRoamers", selec: 0, nom: "Voyageurs de l'espace" });
    }

    if ($(".cbExplorateurs").is(":checked")) {
        arrayFactions.push({ img: "imgExplorers", selec: 0, nom: "Explorateurs" });
    }

    if ($(".cbGrandmeres").is(":checked")) {
        arrayFactions.push({ img: "imgGrannies", selec: 0, nom: "Grand mères" });
    }

    if ($(".cbGrouppies").is(":checked")) {
        arrayFactions.push({ img: "imgRockStars", selec: 0, nom: "Grouppies" });
    }

    if ($(".cbNounours").is(":checked")) {
        arrayFactions.push({ img: "imgTeddyBears", selec: 0, nom: "Nounours" });
    }

    if ($(".cbIttyCritters").is(":checked")) {
        arrayFactions.push({ img: "imgIttyCritters", selec: 0, nom: "Itty Critters" });
    }

    if ($(".cbKaiju").is(":checked")) {
        arrayFactions.push({ img: "imgKaiju", selec: 0, nom: "Kaiju" });
    }

    if ($(".cbMagicalGirls").is(":checked")) {
        arrayFactions.push({ img: "imgMagicalGirls", selec: 0, nom: "Magical Girls" });
    }

    if ($(".cbMegaTroopers").is(":checked")) {
        arrayFactions.push({ img: "imgMegaTroopers", selec: 0, nom: "Mega Troopers" });
    }

    if ($(".cbSheep").is(":checked")) {
        arrayFactions.push({ img: "imgSheep", selec: 0, nom: "Sheep" });
    }

    if ($(".cbDiscoDancers").is(":checked")) {
        arrayFactions.push({ img: "imgDiscoDancers", selec: 0, nom: "Disco Dancers" });
    }

    if ($(".cbStarKungFuFighters").is(":checked")) {
        arrayFactions.push({ img: "imgStarKungFuFighters", selec: 0, nom: "Star Kung Fu Fighters" });
    }

    if ($(".cbTruckers").is(":checked")) {
        arrayFactions.push({ img: "imgTruckers", selec: 0, nom: "Truckers" });
    }

    if ($(".cbVigilantes").is(":checked")) {
        arrayFactions.push({ img: "imgVigilantes", selec: 0, nom: "Vigilantes" });
    }

    if ($(".cbGeeks").is(":checked")) {
        arrayFactions.push({ img: "imgGeeks", selec: 0, nom: "Geeks" });
    }

    if ($(".cbSmashUpAllStars").is(":checked")) {
        arrayFactions.push({ img: "imgSmashUpAllStars", selec: 0, nom: "Smash Up All Stars" });
    }

    if ($(".cbAncientEgyptians").is(":checked")) {
        arrayFactions.push({ img: "imgAncientEgyptians", selec: 0, nom: "Ancient Egyptians" });
    }

    if ($(".cbCowboys").is(":checked")) {
        arrayFactions.push({ img: "imgCowboys", selec: 0, nom: "Cowboys" });
    }

    if ($(".cbSamurai").is(":checked")) {
        arrayFactions.push({ img: "imgSamurai", selec: 0, nom: "Samurai" });
    }

    if ($(".cbVikings").is(":checked")) {
        arrayFactions.push({ img: "imgVikings", selec: 0, nom: "Vikings" });
    }

    if ($(".cbLuchadors").is(":checked")) {
        arrayFactions.push({ img: "imgLuchadors", selec: 0, nom: "Luchadors" });
    }

    if ($(".cbMounties").is(":checked")) {
        arrayFactions.push({ img: "imgMounties", selec: 0, nom: "Mounties" });
    }

    if ($(".cbMusketeers").is(":checked")) {
        arrayFactions.push({ img: "imgMusketeers", selec: 0, nom: "Musketeers" });
    }

    if ($(".cbSumoWrestlerskers").is(":checked")) {
        arrayFactions.push({ img: "imgSumoWrestlerskers", selec: 0, nom: "Sumo Wrestlerskers" });
    }

    if ($(".cbPenguins").is(":checked")) {
        arrayFactions.push({ img: "imgPenguins", selec: 0, nom: "Penguins" });
    }

    if ($(".cbAnansiTales").is(":checked")) {
        arrayFactions.push({ img: "imgAnansiTales", selec: 0, nom: "Anansi Tales" });
    }

    if ($(".cbAncientIncas").is(":checked")) {
        arrayFactions.push({ img: "imgAncientIncas", selec: 0, nom: "Ancient Incas" });
    }

    if ($(".cbGrimmsFairyTales").is(":checked")) {
        arrayFactions.push({ img: "imgGrimmsFairyTales", selec: 0, nom: "Grimms’ Fairy Tales" });
    }

    if ($(".cbPolynesianVoyagers").is(":checked")) {
        arrayFactions.push({ img: "imgPolynesianVoyagers", selec: 0, nom: "Polynesian Voyagers" });
    }

    if ($(".cbRussianFairyTales").is(":checked")) {
        arrayFactions.push({ img: "imgRussianFairyTales", selec: 0, nom: "Russian Fairy Tales" });
    }
}

function Reset() {
    // Permet de reset les decks
    // Aucun prm
    // Aucune valeur de retour

    for (let i = 0; i < arrayFactions.length; i++) {
        arrayFactions[i].selec = 0;
        delete arraySelec[i];
    }
    $('#TableauJ1').remove();
    $('#TableauJ2').remove();
    $('#TableauJ3').remove();
    $('#TableauJ4').remove();
    $('#TableauJ5').remove();
    $('#TableauJ6').remove();
    $('#TableauJ7').remove();
    $('#TableauJ8').remove();
    $('#TableauJ9').remove();
}

function ToutDecocher() {
    // Permet de tout déchocher
    // Aucun prm
    // Aucune valeur de retour

    $('input:checkbox[name=Aliens').attr('checked', false);
    $('input:checkbox[name=Dinosaurs').attr('checked', false);
    $('input:checkbox[name=Ninjas').attr('checked', false);
    $('input:checkbox[name=Pirates').attr('checked', false);
    $('input:checkbox[name=Robots').attr('checked', false);
    $('input:checkbox[name=PetitPeuples').attr('checked', false);
    $('input:checkbox[name=Magiciens').attr('checked', false);
    $('input:checkbox[name=Zombies').attr('checked', false);
    $('input:checkbox[name=CavalerieOurs').attr('checked', false);
    $('input:checkbox[name=Fantomes').attr('checked', false);
    $('input:checkbox[name=PlantesCarnivors').attr('checked', false);
    $('input:checkbox[name=Steampunks').attr('checked', false);
    $('input:checkbox[name=GrandsAnciens').attr('checked', false);
    $('input:checkbox[name=Innsmouth').attr('checked', false);
    $('input:checkbox[name=ServiteursDeCthulhu').attr('checked', false);
    $('input:checkbox[name=UniversiteMiskatonic').attr('checked', false);
    $('input:checkbox[name=SingesCyborgs').attr('checked', false);
    $('input:checkbox[name=Metamorphes').attr('checked', false);
    $('input:checkbox[name=SuperEspions').attr('checked', false);
    $('input:checkbox[name=VoyageursDuTemps').attr('checked', false);
    $('input:checkbox[name=FourmisGeantes').attr('checked', false);
    $('input:checkbox[name=ScientifiquesFous').attr('checked', false);
    $('input:checkbox[name=Vampires').attr('checked', false);
    $('input:checkbox[name=LoupGarous').attr('checked', false);
    $('input:checkbox[name=Fees').attr('checked', false);
    $('input:checkbox[name=ChatonsMignons').attr('checked', false);
    $('input:checkbox[name=ChevauxMythiques').attr('checked', false);
    $('input:checkbox[name=Princesses').attr('checked', false);
    $('input:checkbox[name=Pretres').attr('checked', false);
    $('.input:checkbox[name=Nains').attr('checked', false);
    $('input:checkbox[name=RussianFairyTales').attr('checked', false);
    $('input:checkbox[name=Elfes').attr('checked', false);
    $('input:checkbox[name=Halfelins').attr('checked', false);
    $('input:checkbox[name=Magiciens').attr('checked', false);
    $('input:checkbox[name=Orques').attr('checked', false);
    $('input:checkbox[name=Voleurs').attr('checked', false);
    $('input:checkbox[name=Guerriers').attr('checked', false);
    $('input:checkbox[name=Dragons').attr('checked', false);
    $('input:checkbox[name=MthologiesGrecques').attr('checked', false);
    $('input:checkbox[name=Requins').attr('checked', false);
    $('input:checkbox[name=SuperHeros').attr('checked', false);
    $('input:checkbox[name=Tornades').attr('checked', false);
    $('input:checkbox[name=ChevaliersdesEtoiles').attr('checked', false);
    $('input:checkbox[name=Changeformers').attr('checked', false);
    $('input:checkbox[name=SquatteursDeTrone').attr('checked', false);
    $('input:checkbox[name=VoyageursDeLespace').attr('checked', false);
    $('input:checkbox[name=Explorateurs').attr('checked', false);
    $('input:checkbox[name=Grandmeres').attr('checked', false);
    $('input:checkbox[name=Grouppies').attr('checked', false);
    $('input:checkbox[name=Nounours').attr('checked', false);
    $('input:checkbox[name=IttyCritters').attr('checked', false);
    $('input:checkbox[name=Kaiju').attr('checked', false);
    $('input:checkbox[name=MagicalGirls').attr('checked', false);
    $('input:checkbox[name=MegaTroopers').attr('checked', false);
    $('input:checkbox[name=Sheep').attr('checked', false);
    $('input:checkbox[name=DiscoDancers').attr('checked', false);
    $('input:checkbox[name=StarKungFuFighters').attr('checked', false);
    $('input:checkbox[name=Truckers').attr('checked', false);
    $('input:checkbox[name=Vigilantes').attr('checked', false);
    $('input:checkbox[name=Geeks').attr('checked', false);
    $('input:checkbox[name=SmashUpAllStars').attr('checked', false);
    $('input:checkbox[name=Cowboys').attr('checked', false);
    $('input:checkbox[name=Samurai').attr('checked', false);
    $('input:checkbox[name=Vikings').attr('checked', false);
    $('input:checkbox[name=Luchadors').attr('checked', false);
    $('input:checkbox[name=Mounties').attr('checked', false);
    $('input:checkbox[name=Musketeers').attr('checked', false);
    $('input:checkbox[name=SumoWrestlerskers').attr('checked', false);
    $('input:checkbox[name=Penguins').attr('checked', false);
    $('input:checkbox[name=AnansiTales').attr('checked', false);
    $('input:checkbox[name=AncientIncas').attr('checked', false);
    $('input:checkbox[name=GrimmsFairyTales').attr('checked', false);
    $('input:checkbox[name=RussianFairyTales').attr('checked', false);
}