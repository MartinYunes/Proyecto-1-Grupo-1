let form = document.querySelector('#form')
let input = document.querySelector('#busquedaPalabra')

let seccionPelis = document.querySelector('#peliFavorita');
let seccionTv = document.querySelector('#serieFavorita');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (input.value == "") {
        alert('No puedes enviar un form vacio')
    } else if(input.value.length < 3){
        alert('Debes escribir mas de 3 caracteres')
    } else {
        this.submit()
    }

})

let queryString = location.search;
let queryStringObt= new URLSearchParams (queryString);
let idUrl = queryStringObt.get("buscar");
let detailmovie = `https://api.themoviedb.org/3/search/movie?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US&query=${idUrl}&page=1&include_adult=false`;

fetch(detailmovie)
.then(function (res) {
    return res.json();
})
.then(function (data) {
    let arrayDePeliculas = data.results;
    console.log(arrayDePeliculas);

    
    let todasPeliculas = ''

    console.log(arrayDePeliculas);
    
    for(let i=0; i<4; i++){

        todasPeliculas += `<article class="nombrepeli-serie">
                            <p>${arrayDePeliculas[i].title}</p> 
                            <img class="results-img" src="https://image.tmdb.org/t/p/w500/${arrayDePeliculas[i].poster_path}" alt="img">
                            <a href="./detail-movie.html" class="linkadetalle">Ver más</a>
                        </article>`
    }
  
    seccionPelis.innerHTML = todasPeliculas;

})
.catch( function(e){
    console.log(e)
})







