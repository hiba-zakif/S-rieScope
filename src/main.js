import {update, getAll , create , remove , getById} from "./services/serieService.js";
import {cards} from "./ui/cards.js";


const listeMovies = document.querySelector(".listeMovies");
const nomSerie = document.getElementById("nomSerie");
const genreSerie = document.getElementById("genreSerie");
const descSerie = document.getElementById("descSerie");
const erreurGenreSerie = document.getElementById("erreurGenreSerie");
const erreurDescSerie = document.getElementById("erreurDescSerie");
const erreurNomSerie = document.getElementById("erreurNomSerie");
const ajouterMovie = document.getElementById("ajouterMovie");
const chercher = document.getElementById("chercher");
const filtrer = document.getElementById("filtrer");
const reset = document.getElementById("reset-button");
const form = document.getElementById("filtrerRechercher");



async function displayMovies(){
    const movies =  await getAll();
    console.log(movies);
    
    movies.forEach(element => {
        cards(element,listeMovies);
    });
    
}
displayMovies();

