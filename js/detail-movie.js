let apikey = '81faef6942a31915ed87b416fbba64ba'
let queryString = location.search
let qsObj = new URLSearchParams(queryString)
let detail_id = qsObj.get('id')


let urldetailseries = `https://api.themoviedb.org/3/movie/${detail_id}?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US`
let urlGetRecommendations = `https://api.themoviedb.org/3/movie/${detail_id}/recommendations?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US&page=1`
let urlGetVideos = `https://api.themoviedb.org/3/movie/${detail_id}/videos?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US`
let urlGetReviews = `https://api.themoviedb.org/3/movie/${detail_id}/reviews?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US&page=1`

fetch(urldetailseries).then(function (response) {
    return response.json()
}).then(function (data) {
    


    let title = document.querySelector('.title');
    let anorating = document.querySelector('#ano_y_rating');
    let img = document.querySelector('#img');
    let sinopsis = document.querySelector('#sinopsis')
    let genres = document.querySelector('#genres_pelicula')

    
    listaGeneros = ''
    generosTodos = data.genres
    for (let i = 0; i < generosTodos.length; i++) {
        listaGeneros += `<a href="./detail-genres.html?id_genero=${generosTodos[i].id}" class="link_botones_generos" id="${generosTodos[i].id}">${generosTodos[i].name}</a> `
    }

    
    title.innerText = `${data.title}`;
    anorating.innerText = `${data.release_date} - ${data.vote_average}`
    img.innerHTML = ` <img src='https://image.tmdb.org/t/p/w500/${data.poster_path}'  alt="${data.title}" class="poster">`
    sinopsis.innerText = `${data.overview}`
    genres.innerHTML = `${listaGeneros}`

}).catch(function (error) {
    console.log(error);
})







let providers_url = `https://api.themoviedb.org/3/movie/${detail_id}?api_key=${apikey}`

fetch(providers_url)
    .then(function(response){
    return response.json();
})
    .then(function(data){
    console.log(data);

    let proveedores = ''









})
    .catch(function(error){
    console.log('El error es: ' + error);
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

let urlWatchProviders = `https://api.themoviedb.org/3/movie/${detail_id}/watch/providers?api_key=81faef6942a31915ed87b416fbba64ba`
fetch(urlWatchProviders).then(function (res) {
    return res.json()
}).then(function (data) {
   
    let objLitProviders = data.results
    console.log(objLitProviders);

  
    let watchProviders = document.querySelector('#watchProviders')


    
    if (objLitProviders.MX != undefined && objLitProviders.MX.buy != undefined) {
        let prove = objLitProviders.MX.buy[0];
        watchProviders.innerHTML = `<p class="prove">${prove.provider_name}</p>
                                    <img class="imgwatch" src="https://image.tmdb.org/t/p/w500/${prove.logo_path}">`
    } else {
        watchProviders.innerText = 'No hay sitios disponibles'
    }

}).catch(function (error) {
    console.log(error);
})




let favoritosPelis = [];
let botonFavoritosPelis = document.querySelector('#botonFavoritosPelis');



let recuperoStorage = localStorage.getItem('favoritosPelis');

if (recuperoStorage != null) {
    favoritosPelis = JSON.parse(recuperoStorage);
};


if (favoritosPelis.includes(detail_id)) {
    botonFavoritosPelis.innerText = "- Quitar de Favoritos";
}


botonFavoritosPelis.addEventListener("click", function (e) {
    e.preventDefault()

    
    if (favoritosPelis.includes(detail_id)) {
        let indice = favoritosPelis.indexOf(detail_id);
        favoritosPelis.splice(indice, 1);
        botonFavoritosPelis.innerText = "+ Agregar a Favoritos";
    } else {
       
        favoritosPelis.push(detail_id);
        botonFavoritosPelis.innerText = "- Quitar de Favorito";
    }

   
    let favToString = JSON.stringify(favoritosPelis);

    
    localStorage.setItem('favoritosPelis', favToString)

});