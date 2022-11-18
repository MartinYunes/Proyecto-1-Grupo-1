let queryString = location.search;
let queryStringObjLit = new URLSearchParams(queryString)
let Pelis = queryStringObjLit.get('id')

let urlDetails = `https://api.themoviedb.org/3/movie/${Pelis}?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US`
let urlPeli = `https://api.themoviedb.org/3/movie/${Pelis}/watch/providers?api_key=81faef6942a31915ed87b416fbba64ba`
let urlRecomendaciones = `https://api.themoviedb.org/3/movie/${Pelis}/recommendations?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US&page=1`


fetch(urlDetails).then(function (response) {
    return response.json()
}).then(function (data) {
 
    console.log(data);


      
        let titulo = document.querySelector('.titulo');
        let anioRating = document.querySelector('#año.y.rating');
        let fotoPortada = document.querySelector('#foto.portada');
        let duracion = document.querySelector('#duracion')
        let sinopsis = document.querySelector('#sinopsis')
        let generos = document.querySelector('#generos.pelicula')
    
       
        listaGeneros = 'AGREGARLE QUERYSTRINGS'
        generosTodos = data.genres
        for (let i = 0; i < generosTodos.length; i++) {
           listaGeneros+=` <a href="./detail-movie.html="${generosTodos[i].id}" class="linkdetalle" id="${generosTodos[i].id}">${generosTodos[i].name}`
    
    }
      
        titulo.innerText = `${data.title}`;
        anioRating.innerText = `${data.release_date} - ⭐ ${data.vote_average}`
        fotoPortada.innerHTML = ` <img src='https://image.tmdb.org/t/p/w500/${data.poster_path}'  alt="${data.title}" class="poster">` 
        duracion.innerText = `${data.runtime} minutos`
        sinopsis.innerText = `${data.overview}`
        generos.innerHTML = `${listaGeneros}`
        
    }).catch(function (error) {
        console.log(error);
    })
    
  
    fetch(urlPeli).then(function (response) {
        return response.json()
    }).then(function (data) {
      
        let objLitProviders = data.results
        console.log(objLitProviders);
    
       
        let watchProviders = document.querySelector('#Providerswatch')
    
        let nombreProvider = ''
     
        
        for (let i = 0; i < objLitProviders.length; i++) {
            nombreProvider += objLitProviders[i].provider_name
            
        }
    
        watchProviders.innerHTML = `AGREGAR LOGOS Y LINK Dónde ver: ${nombreProvider}`
        
    }).catch(function (error) {
        console.log(error);
    })
    
  
    fetch(urlRecomendaciones).then(function (response) {
        return response.json()
    }).then(function (data) {
        
        let arrayRecomendadas = data.results
        console.log(data.results);
 
        let verRecomendaciones = document.querySelector('#verRecomendaciones');
        let recomendadas = ''
    
     
        for(let i=0; i<5; i++){
        
            recomendadas += `<article class="peliculaoserieinfo">
                                    <p class="nombrepeli-serie">${arrayRecomendadas[i].title}</p>
                                    <img src='https://image.tmdb.org/t/p/w500/${arrayDePeliculas[i].poster_path}'  alt="Focus" class="tapapelicula">
                                    <a href=<a href="./detail-movie.html"id=${arrayRecomendadas[i].id}" class="linkdetalle">Ver más</a>
                                </article>`
        }
      
        verRecomendaciones.innerHTML = recomendadas;
        
    }).catch(function (error) {
        console.log(error);
    })
    
    let h3 = document.querySelector('h3')
    let botonRecomendaciones = document.querySelector('#VerRecomendacionesboton')
    let recomendacionesHidden = true
    
    if (recomendacionesHidden) {
        botonRecomendaciones.innerText = 'Ver Recomendadas'
        h3.style.display = 'none'
        verRecomendaciones.style.display = 'none'
    }
    
    botonRecomendaciones.addEventListener('click', function (e) {
        if (recomendacionesHidden) {
            botonRecomendaciones.innerText = 'Ver Recomendadas'
            h3.style.display = 'none'
            verRecomendaciones.style.display = 'none'
            recomendacionesHidden = false
        } else {
            botonRecomendaciones.innerText = 'Ocultar Recomendadas'
            h3.style.display = 'flex'
            verRecomendaciones.style.display = 'flex'
            recomendacionesHidden = true
        }
    })
    
