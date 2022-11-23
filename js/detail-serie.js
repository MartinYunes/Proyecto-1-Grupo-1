let apikey = '81faef6942a31915ed87b416fbba64ba'
let queryString = location.search
let qsObj = new URLSearchParams(queryString)
let detail_id = qsObj.get('id')

let urldetailseries = `https://api.themoviedb.org/3/tv/${detail_id}?api_key=${apikey}&language=en-US`

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





let providers_url = `https://api.themoviedb.org/3/tv/${detail_id}/watch/providers?api_key=${apikey}`

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


let favoritosSeries = [];
let botonFavoritosSeries = document.querySelector('#botonFavoritosSeries');



let recuperoStorage = localStorage.getItem('favoritosSeries');

if (recuperoStorage != null) {
    favoritosSeries = JSON.parse(recuperoStorage);
};


if (favoritosSeries.includes(detail_id)) {
    botonFavoritosSeries.innerText = "- Quitar de Favoritos";
}


botonFavoritosSeries.addEventListener("click", function (e) {
    e.preventDefault()

    
    if (favoritosSeries.includes(detail_id)) {
        let indice = favoritosSeries.indexOf(detail_id);
        favoritosSeries.splice(indice, 1);
        botonFavoritosSeries.innerText = "+ Agregar a Favoritos";
    } else {
       
        favoritosSeries.push(detail_id);
        botonFavoritosSeries.innerText = "- Quitar de Favorito";
    }

    
    let favToString = JSON.stringify(favoritosSeries);

   
    localStorage.setItem('favoritosSeries', favToString)

});