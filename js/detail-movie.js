let apikey = '81faef6942a31915ed87b416fbba64ba'
let queryString = location.search
let qsObj = new URLSearchParams(queryString)
let detail_id = qsObj.get('id')

let urldetailseries = `https://api.themoviedb.org/3/movie/${detail_id}?api_key=${apikey}&language=en-US`

fetch(urldetailseries)
    .then(function(response){
    return response.json();

})

    .then(function(data){
    console.log(data);


    let seccion = document.querySelector(".title-text")


    seccion.innerHTML+=
    `<div class="textos">
        <h1 class="titulo">${data.title}</h1>
        <div class="desc">
            <img class="imgdetalleseries" src="https://image.tmdb.org/t/p/w500/${data.poster_path}"/>
            <p class="sinopsis"> ${data.overview}</p>
            <ul>
                <li>Valoracion: ${data.vote_average}</li>
                <li>Fecha de Estreno: ${data.first_air_date}</li>
                <li>Temporadas:${data.number_of_seasons}</li>       
                <li>Genero: 
                    <ul class=listadetalles></ul>
                 </li>                
         
            </ul>
        </div>
    </div>`


    let listadetalles = document.querySelector(".listadetalles")
    
    let elementosgenerosdetalles=''

    for (let i=0; i<data.genres.length; i++){
        elementosgenerosdetalles +=


    `<li>${data.genres[i].name}</li>`
    }

    
    listadetalles.innerHTML += elementosgenerosdetalles



})
    .catch(function(error){
    console.log('El error es: ' + error);
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