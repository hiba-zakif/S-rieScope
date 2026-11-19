import {update, getAll , create , getById} from "./services/serieService.js";
import {cards} from "./ui/cards.js";
import {createObjetMovie } from "./ui/form.js";
import {state} from "./data/store.js";


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



async function loadSeries(){
    const series =  await getAll();
    listeMovies.textContent = "";
    
    series.forEach(element => {
        cards(element,listeMovies);
    });  
}
loadSeries();

function displaySeries(){  
    listeMovies.textContent = "";
    state.movies.forEach(element => {
        cards(element);
    });
}

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
    update(state.editId, updatedMovie);
    console.log(updatedMovie);

    for(let serie of state.movies){
        if(serie.id == state.editId){
            console.log(serie);
            for(let [key , value] of Object.entries(serie)){
                for(let [clé , valeur] of Object.entries(updatedMovie)){
                    if(key == clé){
                        serie[key] = valeur;
                        console.log(serie);
                    }
                }
            }
        }
    }
    

    ajouterMovie.reset();
    state.editId = null;
    displaySeries();
    submit.classList.toggle("hidden");
    annulerModif.classList.toggle("hidden");
    modif.classList.toggle("hidden");


    
})