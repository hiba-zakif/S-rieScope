import {update, getAll , create , getById} from "./services/serieService.js";
import {cards} from "./ui/cards.js";
import {createObjetMovie } from "./ui/form.js";


const listeMovies = document.querySelector(".listeMovies");
const nomSerie = document.getElementById("nomSerie");
const genreSerie = document.getElementById("genreSerie");
const descSerie = document.getElementById("descSerie");
const erreurGenreSerie = document.getElementById("erreurGenreSerie");
const erreurDescSerie = document.getElementById("erreurDescSerie");
const erreurNomSerie = document.getElementById("erreurNomSerie");
const chercher = document.getElementById("chercher");
const filtrer = document.getElementById("filtrer");
const reset = document.getElementById("reset-button");
const form = document.getElementById("filtrerRechercher");
const annulerModif = document.getElementById("annulerModif");
const submit = document.getElementById("submit");
const modif = document.getElementById("Modif");



async function displayMovies(){
    const movies =  await getAll();
    // console.log(movies);
    listeMovies.textContent = "";
    
    movies.forEach(element => {
        cards(element,listeMovies);
    });
    
}
displayMovies();

submit.addEventListener("submit", (e)=>{
        e.preventDefault();
        const newMovie = createObjetMovie();
        if(!newMovie){
            console.log("undefined");
            return
        }
        cards(newMovie);
        create(newMovie);
        
    })


annulerModif.addEventListener("click",(e)=>{
    e.preventDefault();

    ajouterMovie.reset();
    
    submit.classList.toggle("hidden");
    annulerModif.classList.toggle("hidden");
    modif.classList.toggle("hidden");
})

modif.addEventListener("click",(e)=>{
    e.preventDefault();
    const updatedMovie = createObjetMovie();
        if(!updatedMovie){
            console.log("undefined");
            return
        }
    update(updatedMovie);
})