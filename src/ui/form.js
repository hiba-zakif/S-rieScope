const listeMovies = document.querySelector(".listeMovies");
const nomSerie = document.getElementById("nomSerie");
const genreSerie = document.getElementById("genreSerie");
const descSerie = document.getElementById("descSerie");
const erreurGenreSerie = document.getElementById("erreurGenreSerie");
const erreurDescSerie = document.getElementById("erreurDescSerie");
const erreurNomSerie = document.getElementById("erreurNomSerie");
const langueSerie = document.getElementById("langueSerie");
const erreurLangueSerie = document.getElementById("erreurLangueSerie");
const ajouterMovie = document.getElementById("ajouterMovie");
const chercher = document.getElementById("chercher");
const filtrer = document.getElementById("filtrer");
const reset = document.getElementById("reset-button");
const form = document.getElementById("filtrerRechercher");
const modif = document.getElementById("Modif");
const annulerModif = document.getElementById("annulerModif");
const submit = document.getElementById("submit");


function validation(){
    if(nomSerie.value.trim() == ""){
        erreurNomSerie.textContent = "le champ nom est vide";
        return false
    }else if(genreSerie.value.trim() == ""){
        erreurGenreSerie.textContent = "le champ genre est vide";
        return false
    }else if(langueSerie.value == ""){
        erreurLangueSerie.textContent = "le champ langue est vide";
        return false
    }
    return true
}


export function createObjetMovie(){

    const validate = validation();
    if(!validate){
        return
    }
    const newMovie = {
        "name" : nomSerie.value ,
        "summary" : descSerie.value ,
        "genres" : genreSerie.value.split(","),
        "language" : langueSerie.value
    }
    return newMovie; 
}

export function édition(movie){
    nomSerie.value = movie.name;
    genreSerie.value = movie.genres;
    langueSerie.value = movie.language;
    descSerie.value = movie.summary;

    submit.classList.toggle("hidden");
    annulerModif.classList.toggle("hidden");
    modif.classList.toggle("hidden");
}
