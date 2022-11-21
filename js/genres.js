let qs = location.search;
let qsObjLit = new URLSearchParams(qs);

let Pelisid = qsObjLit.get('genres_id')


let Seriesid = qsObjLit.get('genres_id')

let urlpopmovies = `https://api.themoviedb.org/3/movie/popular?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US&page=1`
let urlpopseries = `https://api.themoviedb.org/3/tv/popular?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US&page=1`
let tituloGenero = document.querySelector('.tituloGenero')

fetch(urlpopmovies)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        let arraypopmovies= data.results;
        let section1 = document.querySelector('#pelirecomendadasid');
        let popmovies=[];


        for (let i=0; i<5; i++){

            let title= arraypopmovies[i].title
            let imagen = arraypopmovies[i].poster_path
            let fecha = arraypopmovies[i].release_date
            let id= arraypopmovies[i].id

           popmovies += 
            `<div class="peliculaoserieinfo">
            <a href="./detail-movie.html?id=${id}"><img  class="peli" src="https://image.tmdb.org/t/p/w500/${imagen}" height="280px" width="220px"></a>
            <h3 class="nombres">${title}</h3>
            <li class="fechas">${fecha}</li>
            </div>`
        }

        section1.innerHTML= popmovies;

    })

    .catch(function(error){
        console.log(error);
    })


    fetch(urlpopseries)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        let arraypopseries= data.results;
        let section2 = document.querySelector('#seriesrecomendadasid');
        let popseries=[];

        for (let i=0; i<5; i++){
            
            let title= arraypopseries[i].original_name
            let imagen = arraypopseries[i].poster_path
            let fecha = arraypopseries[i].first_air_date
            let id= arraypopseries[i].id

            popseries += 
            `<div class="peliculaoserieinfo">
            <a href="./detail-serie.html?id=${id}"><img  class="peli" src="https://image.tmdb.org/t/p/w500/${imagen}" height="280px" width="220px"></a>
            <h3 class="nombres">${title}</h3>
            <li class="fechas">${fecha}</li>
            </div>`
        }

        section2.innerHTML = popseries;

    })

    .catch(function(error){
        console.log(error);
    })


    