let recuperarStorage= localStorage.getItem('favoritos');

let favoritos= JSON.parse (recuperarStorage)


let section= document.querySelector("#lista")

let peliculasFavoritas = document.querySelector("#pelisfavoritas");

let seriesFavoritas = document.querySelector('#seriesFavoritas');

let arraySeriesFavoritas = '';
let arrayPeliculasFavoritas = '';

console.log(favoritos);

if (favoritos == null || favoritos.length == 0) {
    section.innerHTML = '<p>No hay películas en favoritos</p>'
} else {
    for (let i = 0; i < 5; i++) {
        let urlPeli = `https://api.themoviedb.org/3/movie/${favoritos[i]}?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US`
        fetch(urlPeli)
            .then(function (response) {
                return response.json();
            }).then(function (data) {
                console.log(data);
                arrayPeliculasFavoritas += `<article class="seccionpeliseriefavorita">
                                            <p class="nombrepeli-serieserie">${data.title}</p>
                                            <img src='https://image.tmdb.org/t/p/w500/${data.poster_path}' alt="img" >
                                            <a href="./detail-movie.html?id=${data.id}" class="linkadetalle">Ver más</a>
                                        </article>`            

            seriesFavoritas.innerHTML = arrayPeliculasFavoritas;

            }).catch(function (error) {
                return error;
            });



};}

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
