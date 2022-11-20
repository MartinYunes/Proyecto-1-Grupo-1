let qs = location.search
let qsObj = new URLSearchParams(qs)
let idPelicula = qsObj.get('id')

let urlDetails = `https://api.themoviedb.org/3/movie/${idPelicula}?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US`
let urlWatchProviders = `https://api.themoviedb.org/3/movie/${idPelicula}/watch/providers?api_key=81faef6942a31915ed87b416fbba64ba`
let urlRecomendations = `https://api.themoviedb.org/3/movie/${idPelicula}/recommendations?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US&page=1`

    let titulo = document.querySelector('.titulo');
    let anioRating = document.querySelector('#año-rating');
    let fotoPortada = document.querySelector('#foto-portada');
    let duracion = document.querySelector('#duracion')
    let sinopsis = document.querySelector('#sinopsis')
    let generos = document.querySelector('#generos-pelicula')
    let botonFavoritos = document.querySelector('#botonFavoritos')

fetch(urlDetails)
.then(function (res) {
    return res.json()
}).then(function (data) {
    
    // Preparo estructura
    
    let generosTodos = data.results
    let todosgeneros = ''

    console.log(generosTodos);
    
    for (let i = 0; i < 5; i++) {
       todosgeneros+=`<a href="./detalle_genero.html?id_genero=${generosTodos[i].id}" class="link_botones_generos" id="${generosTodos[i].id}">${generosTodos[i].name}</a> `
    }

    //Con toda la estructura html completa ahora la paso al DOM
    titulo.innerText = `${data.title}`;
    anioRating.innerText = `${data.release_date} - ⭐ ${data.vote_average}`
    fotoPortada.innerHTML = ` <img src='https://image.tmdb.org/t/p/w500/${data.poster_path}'  alt="${data.title}" class="poster">` 
    duracion.innerText = `${data.runtime} minutos`
    sinopsis.innerText = `${data.overview}`
    generos.innerHTML = `${todosgeneros}`
    
}).catch(function (error) {
    console.log(error);
})
