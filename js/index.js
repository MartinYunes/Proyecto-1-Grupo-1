let apikey = '81faef6942a31915ed87b416fbba64ba'
let urlpopseries =`https://api.themoviedb.org/3/tv/popular?api_key=${apikey}&language=en-US&page=1`
let urlpopmovies= `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`
let urlvalomovies= `https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=en-US&page=1`




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
            `<div class="full">
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
            `<div class="full">
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


    fetch(urlvalomovies)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        let arrayvalomovies= data.results;
        let section3 = document.querySelector('#loMejor');
        let valomovies = []


        for (let i=0; i<5; i++){

            let title= arrayvalomovies[i].title
            let fecha = arrayvalomovies[i].release_date
            let imagen = arrayvalomovies[i].poster_path
            let id= arrayvalomovies[i].id

            valomovies += 
            `<div class="full">
            <a href="./detail-movie.html?id=${id}"><img  class="peli" src="https://image.tmdb.org/t/p/w500/${imagen}" height="280px" width="220px"></a>
            <h3 class="nombres">${title}</h3>
            <li class="fechas">${fecha}</li>
            </div>`
        }

        section3.innerHTML = valomovies;

    })

    .catch(function(error){
        console.log(error);
    })

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