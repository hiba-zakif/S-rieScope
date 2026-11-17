const listeMovies = document.querySelector(".listeMovies");



export function cards (element){
        const article = document.createElement("article");
        listeMovies.append(article);

        
        article.classList.add("border-1","border-[#393939]","rounded-2xl","w-full");

        const img = document.createElement("img");
        article.append(img);
        img.classList.add("w-full","rounded-t-2xl","max-h-80");
        img.setAttribute("src", element.image == undefined ? "./assets/image.png" : element.image.original);
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
        p.classList.add("text-[#BABABA]","mb-3");
        p.innerHTML = `${element.summary.slice(0,150)} ...`;

        const detail = document.createElement("a");
        div.append(detail);
        detail.textContent = "voir detail";
        detail.classList.add("bg-[#ffff]","text-black","py-1","px-2","rounded-2xl");
        detail.setAttribute("href",`./detail.html?id=`+element.id); 

}