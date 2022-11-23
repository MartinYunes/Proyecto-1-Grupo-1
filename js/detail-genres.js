
let qs = location.search;
let qsObjLit = new URLSearchParams(qs);

let idPeli = qsObjLit.get('id_generopelicula')


let idSeries = qsObjLit.get('id_generoserie')

let detailPeliGeneros = `https://api.themoviedb.org/3/discover/movie?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${idPeli}&with_watch_monetization_types=flatrate`
let detailSerieGeneros = `https://api.themoviedb.org/3/discover/tv?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${idSeries}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`

let tituloGenero = document.querySelector('.tituloGenero')

fetch(detailPeliGeneros).then(function (response) {
    return response.json()
}).then(function (data) {
    let listapelis = data.results   
    console.log(listapelis);                           
    let detallepeli = ''
    let generosPeliculas = document.querySelector('#genrespeliculas')


    
    for(let i=0; i<5; i++){
       
        detallepeli += `<article class="peliculaoserieinfo">
                                <p class="nombrepeli-serie">${listapelis[i].title}</p>
                                <img src='https://image.tmdb.org/t/p/w500/${listapelis[i].poster_path}'  alt="" class="tapapelicula">
                                <a href="./detail-movie.html?id=${listapelis[i].id}" class="linkadetalle">Ver más</a>
                            </article>`
    }
   
    generosPeliculas.innerHTML = detallepeli;
}).catch(function (error) {
    console.log('el error es' + error);
    
})

fetch(detailSerieGeneros).then(function (response) {
    return response.json()
}).then(function (data) {
    let listaseries = data.results
    console.log(listaseries);
    let detalleSeries = ''
    let generosSeries = document.querySelector('#genresseries')

    for(let i=0; i<5; i++){
       
        detalleSeries += 
        `<div class="peliculaoserieinfo">
            <p class="nombrepeli-serie">${listaseries[i].name}</p>
            <img src='https://image.tmdb.org/t/p/w500/${listaseries[i].poster_path}'  alt="">
            <a href="./detail-serie.html?id=${listaseries[i].id}" class="linkadetalle">Ver más</a>
        </div>`
    }
   
    generosSeries.innerHTML = detalleSeries;
}).catch(function (error) {
    return error
})

let genresPeli = document.querySelector('#genrespeliculas')
let genresSeries = document.querySelector('#genresseries')

if (qs.search("series") != -1) {
    genresPeli.style.display = "none"
} else {
    genresSeries.style.display = "none"
}