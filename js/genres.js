let qs = location.search;
let qsObjLit = new URLSearchParams(qs);

let Pelisid = qsObjLit.get('genres_id')


let Seriesid = qsObjLit.get('genres_id')

let urlDetalleGenresPeliculas = `https://api.themoviedb.org/3/genre/movie/${Pelisid}list?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US`
let urlDetalleGenresSeries = `https://api.themoviedb.org/3/genre/tv/${Seriesid}list?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US`
let tituloGenero = document.querySelector('.tituloGenero')

fetch(urlDetalleGenresPeliculas).then(function (response) {
    return response.json()
}).then(function (data) {
    let arrayDeResultadosPelis = data.results   
    console.log(arrayDeResultadosPelis);                           
    let detalleGenresPelis = ''
    let genresPeliculas = document.querySelector('#genrespeliculas')


    //2 Recorro la información de la api y la organizo para mostarla en el html
    for(let i=0; i<5; i++){
        //Dentro del for voy acumulando en la variable una estructura html por cada personaje del array.
        detalleGenresPelis += `<article class="peliculaoserieinfo">
                                <p class="nombrepeli-serie">${arrayDeResultadosPelis[i].title}</p>
                                <img src='img src='https://image.tmdb.org/t/p/w500/${data.poster_path}'  alt="${data.title}" class="poster">
                                <a href="./detail-movie.html?id=${arrayDeResultadosPelis[i].id}" class="linkdetalle">Ver más</a>
                            </article>`
    }
    //Con toda la estructura html completa ahora la paso al DOM
    genresPeliculas.innerHTML = detalleGenresPelis;
}).catch(function (error) {
    console.log('el error es' + error);
    
})