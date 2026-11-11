const listeMovies = document.querySelector(".listeMovies");
const nomSerie = document.getElementById("nomSerie");
const genreSerie = document.getElementById("genreSerie");
const descSerie = document.getElementById("descSerie");
const erreurGenreSerie = document.getElementById("erreurGenreSerie");
const erreurDescSerie = document.getElementById("erreurDescSerie");
const erreurNomSerie = document.getElementById("erreurNomSerie");
const ajouterMovie = document.getElementById("ajouterMovie");

async function fetcherData (){
    const response = await fetch('https://api.tvmaze.com/shows?page=0');
    const data = await response.json();

    afficherMovies(data)
    
}


function afficherMovies (data){
    
   data.forEach(element => {
        const article = document.createElement("article");
        listeMovies.append(article);

        article.classList.add("border-1","border-[#393939]","rounded-2xl","w-full");

        const img = document.createElement("img");
        article.append(img);
        img.classList.add("w-full","rounded-t-2xl","max-h-80");
        img.setAttribute("src", element.image.original);
        img.setAttribute("alt", `photo du film ${element.name}`);

        const div = document.createElement("div");
        article.append(div);
        div.classList.add('p-5');

        const h4 = document.createElement("h4");
        div.append(h4);
        h4.classList.add("my-2");
        h4.textContent = element.name;

        const divGenres = document.createElement("div");
        div.append(divGenres);
        divGenres.classList.add("my-2");

        element.genres.forEach(element => {
            const span = document.createElement("span");
            divGenres.append(span);
            span.classList.add("bg-[#292929]","rounded-xl","p-1");
            span.textContent = element;
        });

        const p = document.createElement("p");
        div.append(p);
        p.classList.add("text-[#BABABA]");
        p.innerHTML = `${element.summary.slice(0,180)} ...`;

        
        
   });
}




fetcherData();
